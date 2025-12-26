import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { KEYBOARD_EVENTS } from "~/constants/events/keyboard-events";
import { DOM_EVENTS } from "~/constants/events/dom-events";
import { ICON_PATHS } from "~/constants/icons/svg-icons";
import { COPY } from "~/constants/copy";
import { useSearchCache } from "~/hooks/useSearchCache";

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Use the search cache hook to get cached data and fetching status
  const { search, isFetching, isLoading } = useSearchCache();
  
  // Get search results from cached data
  const searchResults = search(searchQuery);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
        setIsExpanded(false);
        setSearchQuery("");
        setSelectedIndex(-1);
      }
    }

    document.addEventListener(DOM_EVENTS.MOUSE_DOWN, handleClickOutside);
    return () => document.removeEventListener(DOM_EVENTS.MOUSE_DOWN, handleClickOutside);
  }, []);

  // Auto-focus mobile input when modal opens
  useEffect(() => {
    if (isModalOpen && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [isModalOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (searchResults.length === 0 && e.key !== KEYBOARD_EVENTS.ESCAPE) return;

    if (e.key === KEYBOARD_EVENTS.ARROW_DOWN) {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === KEYBOARD_EVENTS.ARROW_UP) {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === KEYBOARD_EVENTS.ENTER && selectedIndex >= 0) {
      e.preventDefault();
      const selectedResult = searchResults[selectedIndex];
      if (selectedResult) {
        if (selectedResult.type === "blog") {
          navigate({ to: selectedResult.url });
        } else {
          // Open external link for projects
          window.open(selectedResult.url, "_blank", "noopener,noreferrer");
        }
        // Close search UI
        setIsFocused(false);
        setIsExpanded(false);
        setSearchQuery("");
        setSelectedIndex(-1);
        setIsModalOpen(false);
      }
    } else if (e.key === KEYBOARD_EVENTS.ESCAPE) {
      setIsFocused(false);
      setIsExpanded(false);
      setSearchQuery("");
      setSelectedIndex(-1);
      setIsModalOpen(false);
      inputRef.current?.blur();
      mobileInputRef.current?.blur();
    }
  };

  const handleInputClick = () => {
    setIsFocused(true);
  };

  const handleMobileIconClick = () => {
    setIsModalOpen(true);
    setSearchQuery("");
    setSelectedIndex(-1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchQuery("");
    setSelectedIndex(-1);
  };

  const handleResultClick = (result: typeof searchResults[0]) => {
    if (result.type === "blog") {
      navigate({ to: result.url });
    } else {
      // Open external link for projects
      window.open(result.url, "_blank", "noopener,noreferrer");
    }
    // Close search UI
    setIsFocused(false);
    setIsExpanded(false);
    setSearchQuery("");
    setSelectedIndex(-1);
    setIsModalOpen(false);
  };

  const showDropdown = isFocused && searchQuery.length > 0;
  const showMobileResults = isModalOpen && searchQuery.length > 0;

  return (
    <>
      {/* Desktop Search - Hidden on mobile */}
      <div
        ref={containerRef}
        className="hidden md:flex relative items-center"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => !isFocused && setIsExpanded(false)}
      >
        {/* Search Icon with Status Indicator */}
        <div className="flex items-center justify-center w-10 h-10 relative">
          <svg
            xmlns={ICON_PATHS.W3}
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current"
            aria-hidden="true"
          >
            <path d={ICON_PATHS.SEARCH} />
          </svg>
          {/* Status indicator - show when fetching */}
          {isFetching && (
            <span className="status status-primary status-xs absolute -top-0.5 -right-0.5">
              <span className="status status-primary status-xs animate-ping absolute"></span>
            </span>
          )}
        </div>

        {/* Expandable Input */}
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSelectedIndex(-1);
          }}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          placeholder={isFocused ? COPY.SEARCH_BAR.PLACEHOLDER : ""}
          className={`
            input input-sm
            transition-all duration-300 ease-in-out
            ${isExpanded ? "w-96 opacity-100 ml-2" : "w-0 opacity-0 ml-0"}
            ${isFocused ? "ring-2 ring-primary" : ""}
          `}
          style={{
            padding: isExpanded ? undefined : "0",
          }}
          aria-label="Search projects and blogs"
        />

        {/* Dropdown Results */}
        {showDropdown && (
          <div
            className="absolute top-full mt-2 right-0 left-10 w-100
              max-h-96 overflow-y-auto glass rounded-box z-50"
          >
            {searchResults.length > 0 ? (
              <ul className="menu p-2">
                {searchResults.map((result, index) => (
                  <li key={result.id}>
                    <button
                      className={`
                        ${selectedIndex === index ? "bg-base-300" : ""}
                        hover:bg-base-200
                      `}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">{result.title}</span>
                        <span className="text-xs opacity-60 line-clamp-1">
                          {result.description}
                        </span>
                        <span className="text-xs opacity-60 capitalize">
                          {result.type}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-sm opacity-60">
                {isLoading ? "Loading data..." : COPY.SEARCH_BAR.NO_RESULTS}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Search Icon - Only visible on mobile */}
      <button
        className="md:hidden btn btn-ghost btn-circle relative"
        onClick={handleMobileIconClick}
        aria-label="Open search"
      >
        <svg
          xmlns={ICON_PATHS.W3}
          viewBox="0 0 512 512"
          className="w-5 h-5 fill-current"
        >
          <path d={ICON_PATHS.SEARCH} />
        </svg>
        {/* Status indicator - show when fetching */}
        {isFetching && (
          <span className="status status-primary status-xs absolute top-2 right-2">
            <span className="status status-primary status-xs animate-ping absolute"></span>
          </span>
        )}
      </button>

      {/* Mobile Search Modal */}
      {isModalOpen && (
        <div className="md:hidden fixed inset-2 shadow-2xl z-50 bg-base-100/60 rounded-box backdrop-blur-sm flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center gap-4 p-4 border-b border-base-300">
            <button
              className="btn btn-ghost btn-circle"
              onClick={handleCloseModal}
              aria-label="Close search"
            >
              <svg
                xmlns={ICON_PATHS.W3}
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <input
              ref={mobileInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              placeholder={COPY.SEARCH_BAR.PLACEHOLDER}
              className="input input-bordered w-full"
              aria-label="Search projects and blogs"
            />
          </div>

          {/* Modal Content - Results */}
          <div className="flex-1 overflow-y-auto p-4">
            {showMobileResults ? (
              searchResults.length > 0 ? (
                <ul className="menu w-full">
                  {searchResults.map((result, index) => (
                    <li key={result.id}>
                      <button
                        className={`
                          ${selectedIndex === index ? "bg-base-300" : ""}
                          hover:bg-base-200
                        `}
                        onClick={() => handleResultClick(result)}
                      >
                        <div className="flex flex-col items-start">
                          <span className="font-semibold">{result.title}</span>
                          <span className="text-xs opacity-60 line-clamp-1">
                            {result.description}
                          </span>
                          <span className="text-xs opacity-60 capitalize">
                            {result.type}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center text-sm opacity-60 mt-8">
                  {isLoading ? "Loading data..." : COPY.SEARCH_BAR.NO_RESULTS}
                </div>
              )
            ) : (
              <div className="text-center text-sm opacity-60 mt-8">
                {COPY.SEARCH_BAR.PLACEHOLDER}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

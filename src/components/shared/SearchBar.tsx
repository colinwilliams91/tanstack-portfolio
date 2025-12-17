import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { KEYBOARD_EVENTS } from "~/constants/keyboard-events";
import { DOM_EVENTS } from "~/constants/dom-events";
import { ICON_PATHS } from "~/constants/svg-icons";

export function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock results - will be replaced with actual data later
  const mockResults: Array<{ id: string; title: string; type: "blog" | "project" }> = [];

  // Close dropdown when clicking outside
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

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (mockResults.length === 0) return;

    if (e.key === KEYBOARD_EVENTS.ARROW_DOWN) {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < mockResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === KEYBOARD_EVENTS.ARROW_UP) {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === KEYBOARD_EVENTS.ENTER && selectedIndex >= 0) {
      e.preventDefault();
      // Handle selection - will be implemented later
      console.log("Selected:", mockResults[selectedIndex]);
    } else if (e.key === KEYBOARD_EVENTS.ESCAPE) {
      setIsFocused(false);
      setIsExpanded(false);
      setSearchQuery("");
      setSelectedIndex(-1);
      inputRef.current?.blur();
    }
  };

  const handleInputClick = () => {
    setIsFocused(true);
  };

  const showDropdown = isFocused && searchQuery.length > 0;

  return (
    <div
      ref={containerRef}
      className="relative flex items-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => !isFocused && setIsExpanded(false)}
    >
      {/* Search Icon */}
      <div className="flex items-center justify-center w-10 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 fill-current"
          aria-hidden="true"
        >
          <path d={ICON_PATHS.SEARCH} />
        </svg>
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
        placeholder={isFocused ? "Start typing to search through my projects and blogs..." : ""}
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
          className="absolute top-full mt-2 right-0 left-10 w-100 max-h-96 overflow-y-auto
            bg-base-100/30 backdrop-blur-md rounded-box shadow-lg z-50
            border border-base-300/50"
        >
          {mockResults.length > 0 ? (
            <ul className="menu p-2">
              {mockResults.map((result, index) => (
                <li key={result.id}>
                  <button
                    className={`
                      ${selectedIndex === index ? "bg-base-300" : ""}
                      hover:bg-base-200
                    `}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">{result.title}</span>
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
              No results found. Keep typing to search through projects and blogs...
            </div>
          )}
        </div>
      )}
    </div>
  );
}

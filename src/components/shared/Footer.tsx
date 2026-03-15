
export const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-6 opacity-60 text-xs text-center mt-auto">
        <div>
            ｡˚☁️©️ colin williams • {new Date().getFullYear()} ˚｡˚
        </div>
        <div>
            ˚➶ ｡˚ ☁️ build: {__BUILD_VERSION__}
            {__BUILD_COMMIT__ ? ` · ${__BUILD_COMMIT__}` : ''} ˋ°•*⁀➷
        </div>
    </footer>
  );
};

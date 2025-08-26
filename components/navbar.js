import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar({
  activePage,
  activePageGroup,
  paginate,
  setActivePage,
  totalInfo,
  wordsInformation,
}) {
  const fastBackward = activePage - activePageGroup;
  // * If the fast backward page is below 1, set it to 1
  const fastBackwardPage = activePage !== 1 ? (fastBackward > 1 ? fastBackward : 1) : 1;
  // * If the active page is the first page, disable the fast backward button
  const disabledFastBackwardButtonClass = activePage === 1 ? " disabled" : "";

  const fastForward = activePage + activePageGroup;
  // * If the fast forward page exceeds the total info, set it to totalInfo
  const fastForwardPage =
    activePage !== totalInfo ? (fastForward < totalInfo ? fastForward : totalInfo) : totalInfo;
  // * If the active page is the last page, disable the fast forward button
  const disabledFastForwardButtonClass = activePage === totalInfo ? " disabled" : "";

  return (
    <nav aria-label="Results Navigation">
      <ul className="pagination justify-content-center">
        <li className={"page-item" + disabledFastBackwardButtonClass}>
          <button className="page-link" lang="ja" onClick={() => setActivePage(1)}>
            最初
          </button>
        </li>
        <li className={"page-item" + disabledFastBackwardButtonClass}>
          <button className="page-link" lang="ja" onClick={() => setActivePage(fastBackwardPage)}>
            «
          </button>
        </li>
        <li className={"page-item" + disabledFastBackwardButtonClass}>
          <button className="page-link" lang="ja" onClick={() => setActivePage(activePage - 1)}>
            前
          </button>
        </li>
        {paginate(
          wordsInformation.map((_, index) => {
            const pageNumber = index + 1;
            const pageIsActive = pageNumber === activePage;
            return (
              <li
                key={pageNumber}
                className={"page-item" + (pageIsActive ? " active" : "")}
                aria-current={pageIsActive ? "page" : "false"}
              >
                <button className="page-link" onClick={() => setActivePage(pageNumber)}>
                  {pageNumber}
                </button>
              </li>
            );
          }),
          activePageGroup,
          Math.ceil(activePage / activePageGroup)
        )}
        <li className={"page-item" + disabledFastForwardButtonClass}>
          <button className="page-link" lang="ja" onClick={() => setActivePage(activePage + 1)}>
            後
          </button>
        </li>
        <li className={"page-item" + disabledFastForwardButtonClass}>
          <button className="page-link" lang="ja" onClick={() => setActivePage(fastForwardPage)}>
            »
          </button>
        </li>
        <li className={"page-item" + disabledFastForwardButtonClass}>
          <button className="page-link" lang="ja" onClick={() => setActivePage(totalInfo)}>
            最後
          </button>
        </li>
      </ul>
    </nav>
  );
}

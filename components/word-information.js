import "bootstrap/dist/css/bootstrap.min.css";
import { addCommaEN, addSemicolonEN } from "@/lib/formatter";
import Ruby from "./ruby";

export default function WordInformation({ activePage, paginate, wordsInformation }) {
  return (
    <ul className="list-group list-group-flush">
      {paginate(
        wordsInformation.map(({ meanings, variants }, index) => (
          <li className="list-group-item" key={index}>
            <ul className="list-group list-group-horizontal-lg d-flex justify-content-center flex-wrap">
              {variants
                // TODO : Sort variants with the most priorities first
                .sort((a, b) => b.priorities.length - a.priorities.length)
                .map(({ written, priorities, pronounced }, index) => (
                  <li className="list-group-item" key={index}>
                    <p className="flex-lg-row">
                      <Ruby kanji={written} furigana={pronounced} />
                    </p>
                    <p className="flex-lg-row">
                      Priorit{priorities.length > 1 ? "ies" : "y"} :{" "}
                      {priorities.length > 0
                        ? priorities
                            .sort()
                            .map(priority => (
                              <span key={priority}>
                                {priority + addCommaEN(priorities, priority)}
                              </span>
                            ))
                        : "None"}
                    </p>
                  </li>
                ))}
            </ul>
            <br />
            <br />
            <ul className="list-group list-group-horizontal-lg d-flex justify-content-center flex-wrap">
              {meanings
                .sort((a, b) => {
                  // TODO : Sort alphabetically according to the first glossary in the list
                  const glossA = a.glosses.slice().sort()[0];
                  const glossB = b.glosses.slice().sort()[0];
                  return glossA < glossB ? -1 : glossA > glossB ? 1 : 0;
                })
                .map(({ glosses }, index) => (
                  <li className="list-group-item text-center" key={index}>
                    {glosses.sort().map(gloss => (
                      <span key={gloss}>{gloss + addSemicolonEN(glosses, gloss)}</span>
                    ))}
                  </li>
                ))}
            </ul>
          </li>
        )),
        1,
        activePage,
      )}
    </ul>
  );
}

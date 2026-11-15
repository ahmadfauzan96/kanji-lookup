import "bootstrap/dist/css/bootstrap.min.css";
import type { JSX } from "react";
import { addCommaEN, addSemicolonEN } from "@/lib/formatter";
import paginate from "@/lib/paginater";
import type { WordInfo, WordMeaning, WordVariant } from "@/lib/types";
import Ruby from "./ruby";

interface WordInformationProps {
  activePage: number;
  wordsInformation: WordInfo[];
}

export default function WordInformation({
  activePage,
  wordsInformation,
}: WordInformationProps): JSX.Element {
  return (
    <ul className="list-group list-group-flush">
      {paginate(
        wordsInformation.map<JSX.Element>(({ variants, meanings }: WordInfo, index: number) => (
          <li className="list-group-item" key={index}>
            <ul className="list-group list-group-horizontal-lg d-flex justify-content-center flex-wrap">
              {variants
                // TODO : Sort variants with the most priorities first
                .sort(
                  ({ priorities: prioritiesA }, { priorities: prioritiesB }) =>
                    prioritiesB.length - prioritiesA.length,
                )
                .map<JSX.Element>(
                  ({ written, pronounced, priorities }: WordVariant, index: number) => (
                    <li className="list-group-item" key={index}>
                      <p className="flex-lg-row">
                        <Ruby kanji={written} furigana={pronounced} />
                      </p>
                      <p className="flex-lg-row">
                        {priorities.length > 1 ? "Priorities" : "Priority"} :{" "}
                        {priorities.length > 0
                          ? priorities
                              .sort()
                              .map<JSX.Element>((priority: string) => (
                                <span key={priority}>
                                  {priority + addCommaEN(priorities, priority)}
                                </span>
                              ))
                          : "None"}
                      </p>
                    </li>
                  ),
                )}
            </ul>
            <br />
            <br />
            <ul className="list-group list-group-horizontal-lg d-flex justify-content-center flex-wrap">
              {meanings
                .sort(({ glosses: glossesA }, { glosses: glossesB }) => {
                  // TODO : Sort alphabetically according to the first glossary in the list
                  const glossA = glossesA.slice().sort()[0];
                  const glossB = glossesB.slice().sort()[0];
                  return glossA < glossB ? -1 : glossA > glossB ? 1 : 0;
                })
                .map<JSX.Element>(({ glosses }: WordMeaning, index: number) => (
                  <li className="list-group-item text-center" key={index}>
                    {glosses.sort().map<JSX.Element>((gloss: string) => (
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

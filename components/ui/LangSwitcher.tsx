"use client";
import { changeLanguage } from "i18next";
import i18n from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
function LangSwitcher() {
  return (
    <button
      className="text-xl ml-7 cursor-pointer underline-animation duration-150 ease-in-out"
      onClick={() => changeLanguage(i18n.language == "hr" ? "en" : "hr")}
    >
      {i18n.language === "hr" ? "English" : "Hrvatski"}{" "}
      <FontAwesomeIcon icon={faLanguage} />
    </button>
  );
}

export default LangSwitcher;

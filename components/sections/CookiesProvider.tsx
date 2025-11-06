import { CookieManager } from "react-cookie-manager";
import { useTranslation } from "react-i18next";
function CookiesProvider({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <CookieManager
      cookieKitId="68f0e4971bbc36d40feb9dfe"
      classNames={{
        popupTitle: "text-xl font-gilory-bold text-dark",
        popupMessage: "text-sm font-gilory text-gray-700",
        acceptButton: "cookie-button red",
        declineButton: "cookie-button",
      }}
      translations={{
        title: t("cookies.title"),
        message: t("cookies.description"),
        buttonText: t("cookies.accept"),
        declineButtonText: t("cookies.reject"),
      }}
      showManageButton={false}
      displayType="popup"
    >
      {children}
    </CookieManager>
  );
}

export default CookiesProvider;

import React from "react";
import ButtonPrincipal from "./ButtonPrincipal";
import { useTranslation } from 'react-i18next';

const Pagination = ({currentPage, totalPages, onPageChange}) => {

    const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center mt-4">
      <ButtonPrincipal
        className="disabled:opacity-90"
        icon="arrow_back_ios_new"
        onClick={() => onPageChange("prev")}
        disabled={currentPage === 1}
      />
      <span className="text-[#0C1811] text-lg font-semibold mx-2">
        {t("pagination.pageInfo", { currentPage, totalPages })}
      </span>
      <ButtonPrincipal
        className="disabled:opacity-50"
        icon="arrow_forward_ios"
        onClick={() => onPageChange("next")}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
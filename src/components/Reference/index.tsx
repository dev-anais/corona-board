import * as S from "./style";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Reference(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <S.DataReference>
      <S.ReferenceTitle>{t("references")}</S.ReferenceTitle>
      <S.ReferenceUl>
        <S.ReferenceLi>https://covid19api.com</S.ReferenceLi>
        <S.ReferenceLi>https://flagpedia.net/about</S.ReferenceLi>
      </S.ReferenceUl>
    </S.DataReference>
  );
}

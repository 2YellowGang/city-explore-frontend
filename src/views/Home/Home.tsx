import { FC, FormEvent, useMemo, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import {
  BenefitsContainer,
  BenefitsItem,
  GuideSearchForm,
  GuideSearchSection,
  RegisterSection,
  StyledButton,
  StyledInput,
  StyledRegisterButton,
  StyledSelect,
} from './Home.styles';
import { addDays } from 'date-fns';
import { Calendar } from '../../components/Calendar';
import { theme } from '../../theme';
import { ExploreWorld } from '../../components/ExploreWorld';
import { Heading } from '../../components/Heading';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Language, Place } from '../../models';
import { slugName } from '../../utils/slugName';
import { _languages, _places } from '../../mockedData';

export const Home: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [place, setPlace] = useState<Place>();
  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectionDateRanges, setSelectionDateRanges] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
      color: theme.colors.primary,
    },
  ]);

  const placeOptions = useMemo(
    () =>
      _places.map((place) => ({
        value: place.name,
        label: place.name,
      })),
    [],
  );

  const languageOptions = useMemo(
    () =>
      _languages.map((lang) => ({
        value: lang.name,
        label: lang.name,
      })),
    [],
  );

  const handleDateChange = (rangesByKey: RangeKeyDict) => {
    setSelectionDateRanges([rangesByKey.selection]);
  };

  const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (place) {
      navigate(`/place/${slugName(place.name)}`);
    }
  };

  return (
    <ViewLayout>
      <ExploreWorld />
      <ContentContainer>
        <GuideSearchSection>
          <GuideSearchForm onSubmit={handleSearchFormSubmit}>
            <h1>{t('views.home.title')}</h1>
            <StyledInput
              type="text"
              placeholder={t('views.home.selectCity') ?? ''}
            />
            <StyledInput
              type="text"
              placeholder={t('views.home.selectLanguage') ?? ''}
            />
            <StyledSelect
              options={placeOptions}
              value={placeOptions.find((p) => p.value === place?.name)}
              placeholder={t('views.home.selectCity') ?? ''}
            />
            <StyledSelect
              options={languageOptions}
              placeholder={t('views.home.selectLanguage') ?? ''}
              isMulti
            />
            <StyledButton type="submit">
              {t('views.home.searchBtn')}
            </StyledButton>
          </GuideSearchForm>
          <Calendar ranges={selectionDateRanges} onChange={handleDateChange} />
        </GuideSearchSection>
        <RegisterSection>
          <Heading>{t('views.home.becomeGuide.title')}</Heading>
          <p>{t('views.home.becomeGuide.description')}</p>
          <BenefitsContainer>
            <BenefitsItem></BenefitsItem>
            <BenefitsItem></BenefitsItem>
            <BenefitsItem></BenefitsItem>
            <BenefitsItem></BenefitsItem>
          </BenefitsContainer>
          <StyledRegisterButton as={Link} to="/register">
            {t('views.home.becomeGuide.registerBtn')}
          </StyledRegisterButton>
        </RegisterSection>
      </ContentContainer>
    </ViewLayout>
  );
};

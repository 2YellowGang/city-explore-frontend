import { FC, FormEvent, useMemo, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import { ViewLayout } from '../../components/ViewLayout';
import { ContentContainer } from '../../components/ContentContainer';
import {
  BenefitItem,
  BenefitItemImage,
  BenefitItemText,
  BenefitsContainer,
  GuideSearchForm,
  GuideSearchSection,
  ReferenceContainer,
  ReferenceItem,
  ReferenceItemHeader,
  StyledButton,
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
import { Section } from '../../components/Section';

import clock from '../../assets/benefits/clock.svg';
import heart from '../../assets/benefits/heart.svg';
import money from '../../assets/benefits/money.svg';
import people from '../../assets/benefits/people.svg';

import stars5 from '../../assets/stars5.svg';

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

    if (place && languages.length) {
      navigate(
        `/place/${slugName(place.name)}/${languages
          .map((lang) => slugName(lang.name))
          .join(',')}`,
      );
    }
  };

  return (
    <ViewLayout>
      <ExploreWorld />
      <ContentContainer>
        <GuideSearchSection>
          <GuideSearchForm onSubmit={handleSearchFormSubmit}>
            <h1>{t('views.home.title')}</h1>
            <StyledSelect
              options={placeOptions}
              value={placeOptions.find((p) => p.value === place?.name)}
              placeholder={t('views.home.selectCity') ?? ''}
              required
              onChange={(newPlace) =>
                setPlace(
                  _places.find(
                    (p) =>
                      p.name === (newPlace as (typeof placeOptions)[0]).value,
                  ),
                )
              }
            />
            <StyledSelect
              options={languageOptions}
              placeholder={t('views.home.selectLanguage') ?? ''}
              isMulti
              required
              onChange={(newLanguages) =>
                setLanguages(
                  _languages.filter((l) =>
                    (newLanguages as typeof languageOptions)
                      .map((l) => l.value)
                      .includes(l.name),
                  ),
                )
              }
            />
            <StyledButton type="submit">
              {t('views.home.searchBtn')}
            </StyledButton>
          </GuideSearchForm>
          <Calendar ranges={selectionDateRanges} onChange={handleDateChange} />
        </GuideSearchSection>
        <Section>
          <Heading>{t('views.home.becomeGuide.title')}</Heading>
          <p>{t('views.home.becomeGuide.description')}</p>
          <BenefitsContainer>
            <BenefitItem>
              <BenefitItemImage src={money} />
              <BenefitItemText>Dodatkowy zarobek</BenefitItemText>
            </BenefitItem>
            <BenefitItem>
              <BenefitItemImage src={clock} />
              <BenefitItemText>Elastyczne godziny pracy</BenefitItemText>
            </BenefitItem>
            <BenefitItem>
              <BenefitItemImage src={people} />
              <BenefitItemText>Poznawanie nowych osób</BenefitItemText>
            </BenefitItem>
            <BenefitItem>
              <BenefitItemImage src={heart} />
              <BenefitItemText>Praca z pasją</BenefitItemText>
            </BenefitItem>
          </BenefitsContainer>
          <StyledRegisterButton as={Link} to="/register">
            {t('views.home.becomeGuide.registerBtn')}
          </StyledRegisterButton>
        </Section>
        <Section>
          <Heading>Referencje</Heading>
          <ReferenceContainer>
            <ReferenceItem>
              <ReferenceItemHeader>
                <div>
                  <img src="https://i.pravatar.cc/50?img=10" />
                  <span>Kasia</span>
                </div>
                <img src={stars5} />
              </ReferenceItemHeader>
              <p>
                Najlepszy sposób na odkrywanie miasta! Dzięki aplikacji mogłem
                wybrać przewodnika, który idealnie pasował do moich
                zainteresowań. To było tak inspirujące i przyjemne
                doświadczenie. Na pewno skorzystam z tej aplikacji podczas
                kolejnych podróży!
              </p>
            </ReferenceItem>
            <ReferenceItem>
              <ReferenceItemHeader>
                <div>
                  <img src="https://i.pravatar.cc/50?img=3" />
                  <span>Michał</span>
                </div>
                <img src={stars5} />
              </ReferenceItemHeader>
              <p>
                Nie wyobrażam sobie podróżowania bez tej aplikacji! Miałem
                okazję poznać lokalnych przewodników, którzy byli pełni pasji i
                miłości do swojego miasta. Dzięki nim odkryłem autentyczną
                kulturę, smaki i historię. To było niezapomniane doświadczenie!"
                - Michał
              </p>
            </ReferenceItem>
          </ReferenceContainer>
        </Section>
      </ContentContainer>
    </ViewLayout>
  );
};

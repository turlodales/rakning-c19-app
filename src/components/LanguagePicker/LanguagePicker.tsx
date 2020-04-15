import React from 'react';
import styled from 'styled-components/native';
import Text from '../ui/Text';
import { changeLanguage, languages } from '../../i18n/index';
import Colors from '../../constants/Colors';
import { CtaButton } from '../Button/index';
import { verticalScale, scale } from '../../utils/index';
import { withNavigation } from 'react-navigation';
import { Content } from '../AppShell';
import { useTranslation } from 'react-i18next';

const LanguageScreen = styled.View``;

const Title = styled(Content)`
  height: ${verticalScale(150)};
`;

const LanguageList = styled(Content)``;

const Continue = styled(Content)``;

function LanguagePicker() {
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = React.useState(i18n.language);

  const changeLocale = (newLocale: string) => () => {
    changeLanguage(newLocale);
    setLocale(newLocale);
  };

  return (
    <LanguageScreen>
      <Title>
        <Text type="heading" level={2} marginBottom={0.25}>
          {t('title')}
        </Text>
        <Text
          style={{
            fontSize: verticalScale(16),
            lineHeight: verticalScale(16 * 1.4),
          }}
        >
          {t('description')}
        </Text>
      </Title>

      <LanguageList>
        {languages.map(({ code, name, flag }, index) => (
          <CtaButton
            index={index}
            key={code}
            align="left"
            justify="start"
            onPress={changeLocale(code)}
            image={flag}
            bgColor={locale === code ? Colors.blue : Colors.backgroundAlt}
            color={locale === code ? Colors.almostWhite : Colors.gray}
            imageDimensions={{
              width: scale(28),
              height: scale(19),
            }}
          >
            {name}
          </CtaButton>
        ))}
      </LanguageList>
    </LanguageScreen>
  );
}

export default withNavigation(LanguagePicker);

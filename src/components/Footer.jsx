import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';

const FooterWrap = styled.footer`
  background: #ffffff;
  color: #64748b;
  padding: 3rem 1.5rem 2rem;
  border-top: 1px solid #e2e8f0;
`;

const Inner = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

const Copy = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
`;

export default function Footer() {
  const { t } = useI18n();

  return (
    <FooterWrap>
      <Inner>
        <Copy>
          © {new Date().getFullYear()} {t('brand.name')} · {t('footer.rights')}
        </Copy>
      </Inner>
    </FooterWrap>
  );
}

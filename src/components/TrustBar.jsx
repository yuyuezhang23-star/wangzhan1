import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';

const Bar = styled.section`
  padding: 1.25rem 1.5rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  text-align: center;
`;

const Inner = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1rem;
`;

const Text = styled.span`
  font-size: 0.9rem;
  color: #64748b;
`;

const Link = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: #0d9488;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function TrustBar() {
  const { t } = useI18n();
  return (
    <Bar>
      <Inner>
        <Text>{t('trustbar.text')}</Text>
        <Link href="#testimonials">{t('trustbar.link')}</Link>
      </Inner>
    </Bar>
  );
}

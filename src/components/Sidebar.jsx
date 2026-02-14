import styled from 'styled-components';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { languages } from '../i18n/translations';

const SidebarWrap = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background: #0a192f;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  overflow-y: auto;
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    padding: 1.5rem;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Noto Serif SC', Georgia, serif;
  transition: color 0.2s;
  &:hover {
    color: #ccd6f6;
  }
`;

const PawIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  fill: currentColor;
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #ccd6f6;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  color: ${props => props.$active ? '#64ffda' : '#8892b0'};
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.2s;
  position: relative;
  
  &:hover {
    color: #64ffda;
  }
  
  ${props => props.$active && `
    &::before {
      content: '';
      position: absolute;
      left: -1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 60%;
      background: #64ffda;
    }
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialLink = styled.a`
  font-size: 0.875rem;
  color: #8892b0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;
  
  &:hover {
    color: #64ffda;
  }
`;

const LangSwitcher = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const LangButton = styled.button`
  font-size: 0.75rem;
  color: ${props => props.$active ? '#64ffda' : '#8892b0'};
  background: transparent;
  border: 1px solid ${props => props.$active ? '#64ffda' : 'rgba(255, 255, 255, 0.1)'};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: #64ffda;
    border-color: #64ffda;
  }
`;

function Icon({ name }) {
  const common = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };
  const stroke = { stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

  if (name === 'mail') {
    return (
      <svg {...common}>
        <path {...stroke} d="M4 6h16v12H4z" />
        <path {...stroke} d="M4 7l8 6 8-6" />
      </svg>
    );
  }
  if (name === 'wechat') {
    return (
      <svg {...common}>
        <path {...stroke} d="M8.5 10.5c0-2.5 2.4-4.5 5.5-4.5s5.5 2 5.5 4.5-2.4 4.5-5.5 4.5c-.6 0-1.2-.1-1.8-.2L10 16l.7-1.7c-1.3-.8-2.2-2.2-2.2-3.8z" />
        <path {...stroke} d="M9 18c-3.3 0-6-2.1-6-4.8 0-2.2 1.8-4.1 4.3-4.6" />
      </svg>
    );
  }
  if (name === 'github') {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.16-3.35-1.16-.45-1.13-1.1-1.43-1.1-1.43-.9-.6.07-.59.07-.59 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.9 0-1.08.39-1.96 1.03-2.65-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.69 1.03 1.57 1.03 2.65 0 3.81-2.33 4.65-4.55 4.9.36.31.68.92.68 1.86v2.75c0 .26.18.57.69.48A10 10 0 0 0 12 2z"
        />
      </svg>
    );
  }
  return null;
}

export default function Sidebar({ activeId }) {
  const { lang, setLang, t } = useI18n();
  
  const navLinks = [
    { id: 'about', label: t('nav.about') || '关于' },
    { id: 'experience', label: t('nav.experience') || '履历' },
    { id: 'projects', label: t('nav.projects') || '项目' },
    { id: 'contact', label: t('nav.contact') },
  ];

  const email = 'yueyue.zhang23@gmail.com';
  const socialLinks = [
    { icon: 'mail', label: 'Email', href: `mailto:${email}`, text: email },
    { icon: 'wechat', label: 'WeChat', href: '#', text: t('contact.items.wechat.value') },
    { icon: 'github', label: 'GitHub', href: 'https://github.com/yuyuezhang23-star' },
  ];

  return (
    <SidebarWrap>
      <Logo href="#about">
        <PawIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* 主掌垫 - 底部大圆 */}
          <circle cx="12" cy="18" r="3.5" />
          {/* 四个脚趾垫 - 上方小圆 */}
          <circle cx="8" cy="10" r="2" />
          <circle cx="12" cy="7" r="2" />
          <circle cx="16" cy="10" r="2" />
          <circle cx="10" cy="5" r="1.5" />
        </PawIcon>
        <span>{t('brand.name')}</span>
      </Logo>
      <Title>{t('banner.title')}</Title>
      <Description>{t('banner.subtitle')}</Description>
      
      <NavLinks>
        {navLinks.map(({ id, label }) => (
          <NavLink 
            key={id} 
            href={`#${id}`}
            $active={activeId === id}
          >
            {label}
          </NavLink>
        ))}
      </NavLinks>

      <SocialLinks>
        {socialLinks.map((link, i) => (
          <SocialLink 
            key={i} 
            href={link.href} 
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <Icon name={link.icon} />
            <span>{link.label}{link.text ? `: ${link.text}` : ''}</span>
          </SocialLink>
        ))}
      </SocialLinks>

      <LangSwitcher>
        {languages.map((l) => (
          <LangButton
            key={l.id}
            $active={l.id === lang}
            onClick={() => setLang(l.id)}
          >
            {l.label}
          </LangButton>
        ))}
      </LangSwitcher>
    </SidebarWrap>
  );
}

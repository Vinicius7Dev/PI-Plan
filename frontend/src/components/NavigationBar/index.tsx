import React, { useState, useCallback } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Container } from './styles';

import Logo from '../../assets/images/PI_Plan.png';
import NavigationButton from './NavigationButton';

interface INavigationBarProps {
  optionSelected: number;
}

// Opições de navegação
const navigationOptions = [
  { id: 0, text: 'Página Inicial', toPage: '/dashboard' },
  { id: 1, text: 'Usuários', toPage: '/users-list' },
  { id: 2, text: 'Clientes', toPage: '/customers-list' },
  { id: 3, text: 'Pedidos', toPage: '/orders-list' },
  { id: 4, text: 'Instalações', toPage: '/installations-list' },
  { id: 5, text: 'Avaliações', toPage: '/assessments-list' },
  { id: 6, text: 'Portfólio', toPage: '/' },
];

// Componente da barra de navegação
const NavigationBar: React.FC<INavigationBarProps> = ({ optionSelected }) => {
  const [showNav, setShowNav] = useState(false);

  // Para o mobile, atualizando a variável para mostrar ou esconder os botões de navegação
  const handleChangeShowNav = useCallback(() => {
    setShowNav(!showNav)
  }, [showNav]);

  return (
    <Container showNav={showNav}>
      <img src={Logo} alt="pi-plan" />

      <button id="show-nav-button" onClick={handleChangeShowNav}>
        <FiMenu />
      </button>

      <div id="nav-links-list">
        {/** Percorrendo as opções de navegação e renderizando-as */}
        {navigationOptions.map(option => (
          <NavigationButton
            key={option.id}
            text={option.text}
            toPage={option.toPage}
            id={optionSelected === option.id ? 'nav-link-selected' : undefined}
          />
        ))}
      </div>
    </Container>
  );
};

export default NavigationBar;
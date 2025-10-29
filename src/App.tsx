// src/App.tsx (substitua inteiro por este)
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Topo from './components/Topo';
import { Container, GlobalCss } from './styles';
import Home from './pages/Home';
import Feminino from './pages/Feminino';
import ModaEvangelica from './pages/ModaEvangelica';
import Masculino from './pages/Masculino';
import Infantil from './pages/Infantil';
import Jeans from './pages/Jeans';
import ModaIntima from './pages/ModaIntima';

// Layout que mostra topo/header e o conteúdo das rotas via <Outlet />
const RootLayout: React.FC = () => (
  <>
    <GlobalCss />
    <Topo />
    <Container>
      <Header />
    </Container>
    <main>
      <Outlet />
    </main>
  </>
);

// Rotas da aplicação
const rotas = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element:<Home />},

      {path:'/feminino', element: <Feminino/>},
      {path: '/ModaEvangelica', element: < ModaEvangelica />},
      { path: '/masculino', element: < Masculino /> },
      { path: '/infantil', element: < Infantil /> },
      { path: '/jeans', element: < Jeans /> },
      { path: '/modaintima', element: < ModaIntima /> },

      
      
      
    
                // rota "/"

      { path: 'thina', element: <div>Thina (placeholder)</div> },
      { path: 'achadinhos', element: <div>Achadinhos (placeholder)</div> },
      { path: 'thina-kids', element: <div>Thina Kids (placeholder)</div> },
      { path: 'nova-colecao', element: <div>Nova Coleção (placeholder)</div> },
      { path: 'categoria/:slug', element: <div>Categoria (placeholder)</div> },
      { path: 'produto/:id', element: <div>Produto (placeholder)</div> },
      { path: 'carrinho', element: <div>Carrinho (placeholder)</div> },
    ],
  },
]);

export default function App() {
  // RouterProvider *envolve* toda a app — assim Header e Banner encontram o contexto
  return <RouterProvider router={rotas} />;
}

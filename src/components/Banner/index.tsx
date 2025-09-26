import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// ✅ CORRETO - apenas estes imports CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import { Button } from '../Button';
import { Imagem, BannerContent } from './styles';

import banner1 from '../../assets/images/Banner/THINA_NOVO.png';
import banner2 from '../../assets/images/Banner/ACHADINHO2.png';
import banner3 from '../../assets/images/Banner/kids.png';
import banner4 from '../../assets/images/Banner/Vestidos_evangelicas.png';

interface BannerConfig {
    image: string;
    title: string;
    subtitle: string;
    button: string;
    buttonVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
    fontFamily?: string;
    textColor?: string;
    titleLetterSpacing?: string;
    subtitleLetterSpacing?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

const Banner = () => {
    const banners: BannerConfig[] = [
        {
            image: banner1,
            title: 'Confiança que veste você',
            subtitle: '', // ← Adicione vazio para evitar erro
            button: '',   // ← Adicione vazio para evitar erro
            buttonVariant: 'primary' as const, // ← Adicione padrão
            fontFamily: "'Roboto Condensed', sans-serif",
            textColor:'#000',
            titleLetterSpacing:'1.4px',
            subtitleLetterSpacing:'1.4px'
        },
        {
            image: banner2,
            title: 'Achadinhos',
            subtitle: '15% off',
            button: 'Aproveite',
            buttonVariant: 'light' as const,
            fontFamily: "'Montserrat', sans-serif",
            textColor: '#FFFFFF', // Branco
            titleLetterSpacing: '1.4px',
            subtitleLetterSpacing: '1.4px',
            // 🔘 CONFIGURAÇÕES DO BOTÃO:
            buttonBgColor: '#FFFFFF', // Fundo branco
            buttonTextColor: '#000000'
        },
        {
            image: banner3,
            title: 'thina kids',
            subtitle: 'Moda que encanta desde cedo',
            button: 'Descubra',
            buttonVariant: 'dark' as const,
            fontFamily: "'Montserrat', sans-serif",
            textColor: '#000000', // Preto
            titleLetterSpacing: '1.4px',
            subtitleLetterSpacing: '1.4px',
            // 🔘 CONFIGURAÇÕES DO BOTÃO:
            buttonBgColor: '#000000', // Fundo preto
            buttonTextColor: '#FFFFFF' // Texto branco
        },
        {
            image: banner4,
            title: 'nova coleção',
            subtitle: 'O look certo para cada momento',
            button: 'Confira',
            buttonVariant: 'light' as const,
            fontFamily: "'Roboto Condensed', sans-serif",
            textColor: '#FFFFFF', // Branco
            titleLetterSpacing: '1.4px',
            subtitleLetterSpacing: '2.11px', // ← Destaque para o subtítulo
            // 🔘 CONFIGURAÇÕES DO BOTÃO:
            buttonBgColor: '#FFFFFF', // Fundo branco
            buttonTextColor: '#79191d' // Texto vinho (ajuste conforme sua cor)

        }
    ];

    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation
            loop
        >
            {banners.map((banner, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Imagem style={{ backgroundImage: `url(${banner.image})` }}>
                            <BannerContent 
                                textColor={banner.textColor}
                                titleLetterSpacing={banner.titleLetterSpacing}
                                subtitleLetterSpacing={banner.subtitleLetterSpacing}
                            >
                                <h2>{banner.title}</h2>
                                {/* Mostra subtitle apenas se existir */}
                                {banner.subtitle && <p>{banner.subtitle}</p>}

                                {/* Mostra button apenas se existir */}
                                {banner.button && (
                                    <Button 
                                        variant={banner.buttonVariant}
                                        size='large'
                                        bgColor={banner.buttonBgColor}
                                        textColor={banner.buttonTextColor}
                                    >
                                        {banner.button}
                                    </Button>
                                )}
                            </BannerContent>
                        </Imagem>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Banner;
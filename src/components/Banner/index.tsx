import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// ✅ CORRETO - apenas estes imports CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

import { Button } from '../Button';
import { Imagem, BannerContent, SwiperWrapper,ButtonWrapper, TextBlock } from './styles';

import banner1 from '../../assets/images/img_Banner/THINA_NOVO.png';
import banner2 from '../../assets/images/img_Banner/ACHADINHO2.png';
import banner3 from '../../assets/images/img_Banner/kids.png';
import banner4 from '../../assets/images/img_Banner/Vestidos_evangelicas.png';

type Algin ='left' | 'center' | 'right';
type Layout = 'column' | 'row';
type Order= 'first' |'last';

interface BannerConfig {
    id?: string;
    image: string;
    title: string;
    //força a quebra de linha
    titleLines?:string;
    subtitle?: string;
    button?: string;
    buttonVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'light' | 'dark';
    fontFamily?: string;
    textColor?: string;
    titleLetterSpacing?: string;
    subtitleLetterSpacing?: string;
    //controla o peso da font
    titleWeight?:number;
    subtitleWeight?:number;
    //controla o tamnaho do texto
    titleSize?: string;
    subtitleSize?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;    
    layout?: Layout;
    position?:Algin;
    textAlign?: Algin;
    buttonOrder?: Order;
    overlayOpacity?: number; // escurecimento da img 
}

const Banner:React.FC =() => {
    const banners: BannerConfig[] = [
        {
            id: 'b1',
            image: banner1,
            title: 'CONFIANÇA  QUE\n VESTE VOCÊ ',
            subtitle: '', // ← Adicione vazio para evitar erro
            button: '',   // ← Adicione vazio para evitar erro
            buttonVariant: 'primary' as const, // ← Adicione padrão
            fontFamily: "'Roboto Condensed', sans-serif",
            textColor: '#000',
            titleLetterSpacing: '6px',
            subtitleLetterSpacing: '4px',
            position: 'center',
            layout: 'column',
            buttonOrder: 'last',
            textAlign: 'center',
            titleWeight: 900,
            titleSize: '6rem',
            overlayOpacity: 0.1

        },
        {
            id: 'b2',
            image: banner2,
            title: 'Achadinhos',
            subtitle: '15% off',
            button: 'Aproveite',
            buttonVariant: 'light' as const,
            fontFamily: "'Montserrat', sans-serif",
            textColor: '#FFFFFF',
            position: 'center',
            layout: 'row',
            buttonOrder: 'first', // botão aparece antes do texto (à esquerda em row)
            textAlign: 'right',
            titleLetterSpacing: '1.4px',
            subtitleLetterSpacing: '1.4px',
            // 🔘 CONFIGURAÇÕES DO BOTÃO:
            buttonBgColor: '#FFFFFF', // Fundo branco
            buttonTextColor: '#000000',
            overlayOpacity: 0.35

        },
        {
            image: banner3,
            title: 'thina kids',
            subtitle: 'Moda que encanta desde cedo',
            button: 'Descubra',
            buttonVariant: 'dark' as const,
            fontFamily: "'Montserrat', sans-serif",
            textColor: '#000000', // Preto
            position: 'left',
            layout: 'column',
            buttonOrder: 'last',
            textAlign: 'left',
            titleLetterSpacing: '1.4px',
            subtitleLetterSpacing: '1.4px',
            // 🔘 CONFIGURAÇÕES DO BOTÃO:
            buttonBgColor: '#000000', // Fundo preto
            buttonTextColor: '#FFFFFF',
            overlayOpacity: 0.35
        },
        {
            image: banner4,
            title: 'nova coleção',
            //subtitle: 'O look certo para cada momento',
            button: 'Confira',
            buttonVariant: 'light' as const,
            fontFamily: "'Roboto Condensed', sans-serif",
            textColor: '#FFFFFF', // Branco
            position: 'right',
            layout: 'column',
            buttonOrder: 'last',
            textAlign: 'right',
            titleLetterSpacing: '1.4px',
            subtitleLetterSpacing: '2.11px', // ← Destaque para o subtítulo
            // 🔘 CONFIGURAÇÕES DO BOTÃO:
            buttonBgColor: '#FFFFFF', // Fundo branco
            buttonTextColor: '#79191d', // Texto vinho (ajuste conforme sua cor)
            overlayOpacity: 0,

        }
    ];
        return (
            <>
                <SwiperWrapper>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        //autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        navigation
                        loop
                    >
                        {banners.map((banner, index) => {                           
                            const layout = banner.layout || 'column';
                            const position = banner.position || 'center';
                            const buttonOrder = banner.buttonOrder || 'last';
                            const textAlign = banner.textAlign || 'left';
                            return (
                                <SwiperSlide key={banner.id ?? index}>
                                    <Imagem
                                        overlayOpacity={typeof banner.overlayOpacity===
                                            'number' ? banner.overlayOpacity:0.35} 
                                            style={{ backgroundImage: `url(${banner.image})`}}
                                            >
                                        <BannerContent
                                            fontFamily={banner.fontFamily}
                                            textColor={banner.textColor}
                                            titleLetterSpacing={banner.titleLetterSpacing}
                                            subtitleLetterSpacing={banner.subtitleLetterSpacing}
                                            layout={layout}
                                            position={position}
                                        >
                                            <TextBlock
                                                style={{
                                                    textAlign: textAlign
                                                }}
                                            >
                                                <h2 style={{
                                                    letterSpacing: banner.titleLetterSpacing,
                                                    fontWeight: banner.titleWeight ?? 700,
                                                    fontSize: banner.titleSize ?? '70px',
                                                    whiteSpace: 'pre-line'
                                                }}
                                                >
                                                {banner.title}
                                                </h2>

                                                {/* Mostra subtitle apenas se existir */}
                                                {banner.subtitle && (
                                                    <p 
                                                    style={{
                                                        letterSpacing: banner.subtitleLetterSpacing,
                                                        fontSize: banner.subtitleSize ?? '1.5rem'
                                                    }}
                                                    >
                                                    {banner.subtitle}
                                                    </p>
                                                )}
                                            </TextBlock>

                                            {/* Mostra button apenas se existir */}
                                            {banner.button && (
                                                <ButtonWrapper buttonOrder={buttonOrder}>
                                                    <Button
                                                        variant={banner.buttonVariant}
                                                        size='large'
                                                        bgColor={banner.buttonBgColor}
                                                        textColor={banner.buttonTextColor}
                                                    >
                                                        {banner.button}
                                                    </Button>
                                                </ButtonWrapper>
                                            )}
                                        </BannerContent>
                                    </Imagem>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </SwiperWrapper>
            </>
        );
    }; 

export default Banner;
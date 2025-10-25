// src/components/Banner/index.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Button as BannerButton } from '../Button';
import { Imagem, BannerContent, SwiperWrapper, ButtonWrapper, TextBlock, visuallyHiddenClassName } from './styles';
import type { BannerConfig } from '../../types/Banner';

import banner1 from '../../assets/images/img_Banner/THINA_NOVO.png';
import banner2 from '../../assets/images/img_Banner/ACHADINHO2.png';
import banner3 from '../../assets/images/img_Banner/CECI.png';
import banner4 from '../../assets/images/img_Banner/Vestidos_evangelicas.png';

interface BannerProps {
    banners?: BannerConfig[];
}

// ADICIONEI paths (to) simples para cada banner padrão — ajuste para suas rotas reais quando quiser.
const defaultBanners: BannerConfig[] = [
    {
        id: 'b1',
        image: banner1,
        imageAlt: 'Thina - confiança que veste você',
        title: 'THINA MODAS ',
        subtitle: 'Confiança que veste você',
        fontFamily: " 'montserrat', sans-serif",
        textColor: '#000',
        position: 'center',
        layout: 'column',
        buttonOrder: 'last',
        textAlign: 'center',
        titleWeight: 700,
        subtitleWeight: 450,
        titleLetterSpacing: '1.4px',
        subtitleLetterSpacing: '1px',
        titleSize: "clamp(2rem, 6vw, 4rem)",
        subtitleSize: "clamp(2rem, 4vw, 2.5rem)",
        contentBottomOffset: '38%',
        overlayOpacity: 0.15
    },
    {
        id: 'b2',
        image: banner2,
        imageAlt: 'Achadinhos\n 15% OFF',
        title: 'Achadinhos',
        subtitle: '15% OFF',
        fontFamily: "'Roboto-flex', sans-serif",
        textColor: '#FFFFFF',
        position: 'left',
        layout: 'row',
        buttonOrder: 'last',
        textAlign: 'center',
        titleLetterSpacing: '10px',
        subtitleLetterSpacing: '1px',
        subtitleWeight: 700,
        titleWeight: 300,
        titleSize: "clamp(2.2rem, 8vw, 4.8rem)",
        subtitleSize: "clamp(2.4rem, 4vw, 4.5rem)",
        contentBottomOffset: '16%',
        overlayOpacity: 0.48,
        contentTranslateY: '10px',
        contentAlign: 'flex-start',
        buttonSpacing: '90px',
        horizontalSpacing: '350px',
        buttonProps: {
            label: 'Aproveite',
            variant: 'light',
            bgColor: '#FFFFFF',
            textColor: '#000000',
            size: 'large',
            to: '/achadinhos'
        },
    },
    {
        id: 'b3',
        image: banner3,
        imageAlt: 'Thina Kids - Moda que encanta desde cedo',
        title: 'THINA KIDS',
        subtitle: 'Moda que encanta desde cedo',
        fontFamily: "'Montserrat', sans-serif",
        textColor: '#000000',
        position: 'center',
        layout: 'column',
        buttonOrder: 'last',
        textAlign: 'center',
        titleLetterSpacing: '1.4px',
        subtitleLetterSpacing: '1.2px',
        titleWeight: 700,
        subtitleWeight: 400,
        titleSize: "clamp(2rem, 6vw, 4rem)",
        subtitleSize: "clamp(2rem, 4vw, 3rem)",
        contentBottomOffset: '20%',
        overlayOpacity: 0.2,
        buttonSpacing: '40px',
        buttonBlockCentered: true,
        buttonProps: {
            label: 'Descubra',
            variant: 'dark',
            bgColor: '#000000',
            textColor: '#FFFFFF',
            size: 'large',
            to: '/thina-kids'
        },
    },
    {
        id: 'b4',
        image: banner4,
        imageAlt: 'Nova coleção - looks',
        title: 'NOVA \n COLEÇÃO',
        subtitle: 'O LOOK CERTO PARA CADA MOMENTO',
        fontFamily: "'Roboto Condensed', sans-serif",
        textColor: '#FFFFFF',
        position: 'left',
        layout: 'column',
        buttonOrder: 'last',
        textAlign: 'center',
        contentAlign: 'flex-start',
        contentJustify: 'flex-end',
        buttonBlockCentered: false,
        buttonCenter: false,
        titleLetterSpacing: '6px',
        subtitleLetterSpacing: '6px',
        titleWeight: 600,
        subtitleWeight: 100,
        titleSize: "clamp(4.8rem, 5vw, 3.5rem)",
        subtitleSize: "clamp(1.6rem, 2.2vw, 1.25rem)",
        contentBottomOffset: '30%',
        contentMarginLeft: '',
        buttonSpacing: '5%',
        overlayOpacity: 0,
        buttonAlign: 'left',
        buttonMarginLeft: '200px',
        buttonMarginTop: '100px',
        textGap: '25px',
        buttonProps: {
            label: 'Confira',
            variant: 'light',
            bgColor: '#FFFFFF',
            textColor: '#79191d',
            size: 'large',
            to: '/nova-colecao'
        },
    }
];

const Banner: React.FC<BannerProps> = ({ banners = defaultBanners }) => {
    return (
        <SwiperWrapper>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                loop
                autoplay={false}
            >
                {banners.map((banner, index) => {
                    const layout = banner.layout ?? 'column';
                    const position = banner.position ?? 'center';
                    const buttonOrder = banner.buttonOrder ?? 'last';
                    const textAlign = banner.textAlign ?? (position === 'left' ? 'left' : position === 'right' ? 'right' : 'center');

                    return (
                        <SwiperSlide key={banner.id ?? index}>
                            <Imagem
                                overlayOpacity={typeof banner.overlayOpacity === 'number' ? banner.overlayOpacity : 0.35}
                                role='img'
                                aria-label={banner.imageAlt ?? banner.title}
                                style={{ backgroundImage: `url(${banner.image})` }}
                            >
                            <img className={visuallyHiddenClassName} src={banner.image} alt={banner.imageAlt ?? banner.title} loading="lazy" />

                                <BannerContent
                                    fontFamily={banner.fontFamily}
                                    textColor={banner.textColor}
                                    contentBottomOffset={banner.contentBottomOffset}
                                    contentTranslateY={banner.contentTranslateY}
                                    titleLetterSpacing={banner.titleLetterSpacing}
                                    subtitleLetterSpacing={banner.subtitleLetterSpacing}
                                    layout={layout}
                                    position={position}
                                    contentMarginLeft={banner.contentMarginLeft}
                                    contentGap={banner.contentGap}
                                    contentJustify={banner.contentJustify}
                                    maxWidth={banner.maxWidth}
                            >
                                <TextBlock style={{ textAlign }} $gap={banner.textGap}>
                                    <h2 style={{
                                            letterSpacing: banner.titleLetterSpacing,
                                            fontWeight: banner.titleWeight ?? 700,
                                            fontSize: banner.titleSize,
                                            whiteSpace: 'pre-line'
                                        }}>
                                            {banner.title}
                                    </h2>
                                        {banner.subtitle && (
                                            <p style={{
                                                letterSpacing: banner.subtitleLetterSpacing,
                                                fontSize: banner.subtitleSize ?? 'clamp(0.9rem, 2.2vw, 1.25rem)',
                                                fontWeight: banner.subtitleWeight ?? 400
                                            }}>
                                                {banner.subtitle}
                                            </p>
                                        )}
                                    </TextBlock>
                                    {banner.buttonProps && (
                                        <ButtonWrapper
                                            buttonOrder={buttonOrder}
                                            spacing={banner.buttonSpacing}
                                            buttonHeight={banner.buttonHeight}
                                            horizontalSpacing={banner.horizontalSpacing}
                                            layout={layout}
                                            mt={banner.buttonMt}
                                            buttonBlockCentered={banner.buttonBlockCentered}
                                            buttonCenter={banner.buttonCenter}
                                            buttonAlign={banner.buttonAlign}
                                            buttonMarginLeft={banner.buttonMarginLeft}
                                            buttonMarginRight={banner.buttonMarginRight}
                                            buttonMarginTop={banner.buttonMarginTop}
                                        >
                                        <BannerButton
                                                variant={banner.buttonProps.variant}
                                                size={banner.buttonProps.size}
                                                bgColor={banner.buttonProps.bgColor}
                                                textColor={banner.buttonProps.textColor}
                                                onClick={banner.buttonProps.onClick}
                                                label={banner.buttonProps.label}
                                                height={banner.buttonHeight}
                                                mt={banner.buttonMt}
                                                to={banner.buttonProps.to} // <-- PASSANDO O 'to' AQUI
                                        />
                                        </ButtonWrapper>
                                    )}
                                </BannerContent>
                            </Imagem>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SwiperWrapper>
    );
};

export default Banner;

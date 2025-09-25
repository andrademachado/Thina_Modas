import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// ✅ CORRETO - apenas estes imports CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// ❌ REMOVA: import 'swiper/css/autoplay'; 

import { Button } from '../Button';
import { Imagem, BannerContent } from './styles';

import banner1 from '../../assets/images/Banner/THINA.png';
import banner2 from '../../assets/images/Banner/ACHADINHOS6.png';
import banner3 from '../../assets/images/Banner/THINA KIDS.4png.png';
import banner4 from '../../assets/images/Banner/Baner2.png';

const Banner = () => {
    const banners = [
        {
            image: banner1,
            title: 'Confiança que veste você',
            subtitle: '', // ← Adicione vazio para evitar erro
            button: '',   // ← Adicione vazio para evitar erro
            buttonVariant: 'primary' as const // ← Adicione padrão
        },
        {
            image: banner2,
            title: 'Achadinhos',
            subtitle: '15% off',
            button: 'Aproveite',
            buttonVariant: 'success' as const
        },
        {
            image: banner3,
            title: 'thina kids',
            subtitle: 'Moda que encanta desde cedo',
            button: 'Descubra',
            buttonVariant: 'danger' as const
        },
        {
            image: banner4,
            title: 'nova coleção',
            subtitle: 'O look certo para cada momento',
            button: 'Confira',
            buttonVariant: 'secondary' as const
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
                            <BannerContent>
                                <h2>{banner.title}</h2>
                                {/* Mostra subtitle apenas se existir */}
                                {banner.subtitle && <p>{banner.subtitle}</p>}

                                {/* Mostra button apenas se existir */}
                                {banner.button && (
                                    <Button variant={banner.buttonVariant} size='large'>
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
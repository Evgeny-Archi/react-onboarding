import React from 'react';
import styled from 'styled-components';
// import enginePng from './assets/car1.png';
// import transmissionPng from './assets/car2.png';
// import otherPartsPng from './assets/car3.png';
import enginePng from './assets/engine@2x.png';
import transmissionPng from './assets/transmission@2x.png';
import otherPartsPng from './assets/other-parts@2x.png';
import { Engine, Transmission, Parts } from './assets';
import pointSvg from './assets/point.svg';
import { SliderProps } from '../src';

const Lists = styled.ul`
    padding-left: 20px;
`;

const ListItem = styled.li`
    list-style: url(${pointSvg});
    padding-left: 10px;
    margin-bottom: 20px;
`;

const sliderItems: SliderProps = {
    title: `Что входит в${String.fromCharCode(160)}гарантию`,
    autoplay: false,
    animation: 'slide',
    disableClouds: false,
    slides: [
        {
            title: 'Двигатель',
            content: (
                <Lists>
                    <ListItem>
                        <strong>Блок цилиндров:</strong> детали цилиндропоршневой группы: поршни, шатуны, поршневые
                        пальцы, компрессионные и маслосъемные кольца, шатунные и коренные вкладыши, коленчатый вал,
                        поддон картера.
                    </ListItem>
                    <ListItem>
                        <strong>Головка блока цилиндров (ГБЦ)</strong>
                    </ListItem>
                    <ListItem>
                        <strong>Система смазки:</strong> маслоприемник, масляный насос.
                    </ListItem>
                </Lists>
            ),
            imageUrl: enginePng,
            navIcon: <Engine />,
        },
        {
            title: 'Коробка',
            content: (
                <Lists>
                    <ListItem>
                        <strong>Головка блока цилиндров (ГБЦ)</strong>
                    </ListItem>
                    <ListItem>
                        <strong>Система смазки:</strong> маслоприемник, масляный насос.
                    </ListItem>
                    <ListItem>
                        <strong>Блок цилиндров:</strong> детали цилиндропоршневой группы: поршни, шатуны, поршневые
                        пальцы, компрессионные и маслосъемные кольца, шатунные и коренные вкладыши, коленчатый вал,
                        поддон картера.
                    </ListItem>
                </Lists>
                // <Lists>
                //     <ListItem>
                //         <strong>Механическая коробка передач (МКПП):</strong>
                //         все смазываемые внутренние детали, кроме сцепления
                //     </ListItem>
                //     <ListItem>
                //         <strong>Автоматическая коробка передач (АКПП):</strong> все смазываемые внутренние детали, за
                //         исключением, электрогидравлического блока управления (мехатроник), гидравлического блока
                //         управления (гидроблок) и гидротрансформатор.
                //     </ListItem>
                //     <ListItem>
                //         <strong>Роботизированная коробка передач:</strong> все смазываемые внутренние детали, за
                //         исключением блоков управления и актуаторов.
                //     </ListItem>
                //     <ListItem>
                //         <strong>Редуктор переднего и заднего моста.</strong>
                //     </ListItem>
                //     <ListItem>
                //         <strong>DSG,</strong> механическая часть.
                //     </ListItem>
                // </Lists>
            ),
            imageUrl: transmissionPng,
            navIcon: <Transmission />,
        },
        {
            title: 'Прочие узлы',
            content: (
                <Lists>
                    <ListItem>
                        <strong>Головка блока цилиндров (ГБЦ)</strong>
                    </ListItem>
                    <ListItem>
                        <strong>Блок цилиндров:</strong> детали цилиндропоршневой группы: поршни, шатуны, поршневые
                        пальцы, компрессионные и маслосъемные кольца, шатунные и коренные вкладыши, коленчатый вал,
                        поддон картера.
                    </ListItem>
                    <ListItem>
                        <strong>Система смазки:</strong> маслоприемник, масляный насос.
                    </ListItem>
                </Lists>
                // <Lists>
                //     <ListItem>
                //         <strong>Радиатор системы охлаждения</strong>
                //     </ListItem>
                //     <ListItem>
                //         <strong>Радиатор кондиционера</strong>
                //     </ListItem>
                //     <ListItem>
                //         <strong>Насос гидроусилителя руля</strong>
                //     </ListItem>
                //     <ListItem>
                //         <strong>Навесное оборудование:</strong> стартер, генератор, впускной коллектор, выпускной
                //         коллектор, компрессор кондиционера, насос жидкостного охлаждения двигателя (помпа), главный
                //         цилиндр/вакуумный насос тормозного привода, гидротрансформатор.
                //     </ListItem>
                // </Lists>
            ),
            imageUrl: otherPartsPng,
            navIcon: <Parts />,
        },
        {
            title: 'Двигатель',
            content: (
                <Lists>
                    <ListItem>
                        <strong>Блок цилиндров:</strong> детали цилиндропоршневой группы: поршни, шатуны, поршневые
                        пальцы, компрессионные и маслосъемные кольца, шатунные и коренные вкладыши, коленчатый вал,
                        поддон картера.
                    </ListItem>
                    <ListItem>
                        <strong>Головка блока цилиндров (ГБЦ)</strong>
                    </ListItem>
                    <ListItem>
                        <strong>Система смазки:</strong> маслоприемник, масляный насос.
                    </ListItem>
                </Lists>
            ),
            imageUrl: enginePng,
            navIcon: <Engine />,
        },
    ],
};

export default sliderItems;

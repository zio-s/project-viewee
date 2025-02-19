// 'use client';
// import { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';
// import { Container, GridItem, GridWrap, Section } from './style';
// import { useNavigate } from 'react-router';
// import {
//   selectAnimationPlaying,
//   selectAnimationProgress,
//   selectScrollAnimation,
//   selectWindowWidth,
//   setActiveSection,
//   setAnimationPlaying,
//   setAnimationProgress,
//   setScrollAnimationComplete,
//   updateWindowWidth,
// } from '../../../store/modules/gsapSlice';
// gsap.registerPlugin(ScrollTrigger);

// const GridAnimation = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const containerRef = useRef(null);
//   const sectionRef = useRef(null);
//   const timelineRef = useRef(null);

//   const windowWidth = useSelector(selectWindowWidth);
//   const scrollAnimation = useSelector(selectScrollAnimation);
//   const scrollProgress = useSelector(selectAnimationProgress('scroll'));
//   const isPlaying = useSelector(selectAnimationPlaying('scroll'));

//   const onGo = () => {
//     navigate('/');
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       dispatch(updateWindowWidth(window.innerWidth));
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [dispatch]);

//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1,
//       smoothWheel: true,
//       normalizeWheel: true,
//     });

//     lenis.on('scroll', () => {
//       ScrollTrigger.update();
//     });

//     const scrollFn = (time) => {
//       lenis.raf(time);
//       requestAnimationFrame(scrollFn);
//     };
//     requestAnimationFrame(scrollFn);

//     const section = sectionRef.current;
//     if (!section) return;

//     dispatch(setActiveSection('scroll'));
//     dispatch(setAnimationPlaying({ section: 'scroll', isPlaying: true }));

//     const gridWrap = section.querySelector('div');
//     const gridItems = section.querySelectorAll('[data-grid-item]');
//     const title = section.querySelector('h2');
//     const button = section.querySelector('button');

//     gsap.set(button, {
//       opacity: 0,
//       y: 30,
//     });

//     gridItems.forEach((item, index) => {
//       let x, y;

//       if (index < 8) {
//         x = gsap.utils.random(-40, 40);
//         y = gsap.utils.random(-30, -10);
//       } else if (index < 16) {
//         x = gsap.utils.random(-45, 45);
//         y = gsap.utils.random(-10, 10);
//       } else {
//         x = gsap.utils.random(-40, 40);
//         y = gsap.utils.random(10, 30);
//       }

//       if (index % 3 === 0) x -= 30;
//       if (index % 3 === 1) x += 30;

//       gsap.set(item, {
//         xPercent: x,
//         yPercent: y,
//         z: gsap.utils.random(-2500, -1500),
//         rotateX: gsap.utils.random(-35, -25),
//         scale: gsap.utils.random(0.8, 1.1),
//         filter: 'brightness(55.7062%)',
//       });
//     });

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 1,
//         pin: true,
//         onUpdate: (self) => {
//           dispatch(
//             setAnimationProgress({
//               section: 'scroll',
//               progress: self.progress,
//             })
//           );
//         },
//         onComplete: () => {
//           dispatch(setScrollAnimationComplete(true));
//           dispatch(setAnimationPlaying({ section: 'scroll', isPlaying: false }));
//         },
//       },
//     });

//     timeline
//       .to([title], {
//         opacity: 0,
//         y: -50,
//         duration: 0.3,
//       })
//       .to(
//         gridItems,
//         {
//           xPercent: 0,
//           yPercent: 0,
//           z: 1000,
//           rotateX: -5,
//           scale: 1,
//           filter: 'brightness(100%)',
//           stagger: {
//             each: 0.02,
//             from: 'random',
//           },
//           ease: 'power1.out',
//         },
//         0
//       )
//       .to(
//         gridWrap,
//         {
//           z: 2000,
//           rotateX: -10,
//           ease: 'none',
//         },
//         0
//       )
//       .to(
//         button,
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.5,
//           ease: 'power2.out',
//         },
//         '>-0.3'
//       );

//     timelineRef.current = timeline;

//     return () => {
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//       dispatch(setAnimationPlaying({ section: 'scroll', isPlaying: false }));
//       dispatch(setScrollAnimationComplete(false));
//       lenis.destroy();
//     };
//   }, [dispatch]);

//   return (
//     <Container ref={containerRef}>
//       <Section ref={sectionRef}>
//         <h2>새로올라온 작품을 보다 빠르게</h2>
//         <button onClick={onGo}>지금 보러라기</button>
//         <GridWrap>
//           {Array.from({ length: 32 }).map((_, i) => (
//             <GridItem key={i} data-grid-item>
//               <img src={`/images/mainPoster1.png`} alt={`Grid item ${i + 1}`} />
//             </GridItem>
//           ))}
//         </GridWrap>
//       </Section>
//     </Container>
//   );
// };

// export default GridAnimation;

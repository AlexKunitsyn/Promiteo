// import { makeStyles } from '@mui/styles';
// import { alpha, Theme } from '@mui/material';
// import palette from '@styles/palette';
// import { squareMixin } from '@utils/mixinsForStyle';
//
// export const useGalleryStyles = makeStyles((theme: Theme) => ({
//   galleryContainer: {
//     position: 'relative',
//   },
//
//   sliderImage: {
//     borderRadius: '10px',
//   },
//
//   sliderFile: {
//     maxHeight: 350,
//     overflowY: 'scroll',
//
//     [theme.breakpoints.down('lg')]: {
//       maxHeight: 350,
//     },
//   },
//
//   wrapperSlider: {
//     margin: `${theme.spacing(2)} auto ${theme.spacing(2)} auto`,
//
//     '& img, & iframe': {
//       display: 'block',
//       margin: '0 auto',
//       // width: '100%',
//       // borderRadius: '10px',
//       maxHeight: 500,
//
//       [theme.breakpoints.down('lg')]: {
//         maxHeight: 350,
//       },
//     },
//
//     '& .swiper': {
//       position: 'inherit',
//     },
//
//     '& .swiper-button-next, & .swiper-button-prev': {
//       top: '87.5%',
//       color: palette.orange,
//       width: 'calc(var(--swiper-navigation-size)/ 1145 * 27)',
//     },
//     '& .swiper-button-next:after, & .swiper-button-prev:after': {
//       fontSize: '1.6rem',
//       fontWeight: '600',
//       [theme.breakpoints.down('md')]: {
//         fontSize: '1.5rem',
//       },
//     },
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: theme.spacing(0),
//     },
//   },
//
//   wrapperBannerSlider: {
//     // margin: `${theme.spacing(2)} auto ${theme.spacing(2)} auto`,
//     // height: '100%',
//
//     '& .swiper': {
//       position: 'inherit',
//     },
//
//     '& .swiper-button-next, & .swiper-button-prev': {
//       top: '50%',
//       ...squareMixin(35),
//       color: theme.palette.primary.light,
//       background: palette.darkGrey,
//       borderRadius: 100,
//       // width: 'calc(var(--swiper-navigation-size)/ 1145 * 27)',
//     },
//     '& .swiper-button-next:after, & .swiper-button-prev:after': {
//       fontSize: '1rem',
//       fontWeight: '600',
//     },
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: theme.spacing(0),
//     },
//   },
//   wrapperPromotionSlider: {
//     height: '100%',
//     width: '100%',
//     padding: theme.spacing(0, 8),
//     boxSizing: 'border-box',
//     '& .swiper-slide': {
//       cursor: 'pointer',
//       height: 'auto',
//       padding: theme.spacing(3, 0, 3, 0),
//     },
//
//     '& .swiper': {
//       position: 'inherit',
//       padding: theme.spacing(0, 1.5),
//     },
//
//     '& .swiper-button-next, & .swiper-button-prev': {
//       top: '38%',
//       ...squareMixin(44),
//       color: theme.palette.primary.light,
//       background: palette.darkGrey,
//       borderRadius: 100,
//       // width: 'calc(var(--swiper-navigation-size)/ 1145 * 27)',
//     },
//     '& .swiper-button-next:after, & .swiper-button-prev:after': {
//       fontSize: '1.3rem',
//       fontWeight: '600',
//     },
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: theme.spacing(0),
//     },
//   },
//   wrapperThumbs: {
//     // width: 230,
//     // marginBottom: theme.spacing(3),
//     // padding: theme.spacing(3)
//
//     '& .swiper-slide-thumb-active': {
//       '& > div': {
//         border: `1px solid ${theme.palette.border.primary}`,
//         borderRadius: '10px',
//
//         '& > img': {
//           borderRadius: '10px',
//           // maxHeight: 500,
//         },
//       },
//     },
//   },
//   thumbsItemActive: {
//     '& > div': {
//       border: `1px solid ${theme.palette.border.primary}`,
//       borderRadius: '10px',
//
//       '& > img': {
//         borderRadius: '10px',
//         // maxHeight: 500,
//       },
//     },
//   },
//   containerSmallSlider: {
//     '& .swiper-button-next, & .swiper-button-prev': {
//       color: theme.palette.text.primary,
//       width: 'calc(var(--swiper-navigation-size)/ 1145 * 27)',
//     },
//     '& .swiper-button-next:after, & .swiper-button-prev:after': {
//       fontSize: '1.6rem',
//       fontWeight: '600',
//       [theme.breakpoints.down('md')]: {
//         fontSize: '1.5rem',
//       },
//     },
//     position: 'relative',
//   },
//   smallSwiper: {
//     height: '20%',
//     width: '100%',
//     padding: theme.spacing(0, 4),
//     boxSizing: 'border-box',
//     '& .swiper-slide': {
//       cursor: 'pointer',
//       width: '25%',
//       height: '100%',
//       padding: theme.spacing(3, 0, 3, 0),
//     },
//
//     '& .swiper-slide img': {
//       display: 'block',
//       width: 'auto',
//       height: 100,
//       objectFit: 'contain',
//       padding: theme.spacing(1),
//       borderRadius: '10px',
//       margin: '0 auto',
//     },
//   },
//
//   lightVideo: {
//     textAlign: 'center',
//     pointerEvents: 'none',
//     overflow: 'hidden',
//     borderRadius: '10px',
//     position: 'relative',
//     border: '1px solid transparent',
//     // backgroundColor: theme.palette['gray'],
//   },
//   lightFile: {
//     textAlign: 'center',
//     pointerEvents: 'none',
//     overflow: 'hidden',
//     borderRadius: '10px',
//     position: 'relative',
//     border: '1px solid transparent',
//     height: 100,
//   },
//   lightFileIcon: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 0,
//     left: 0,
//     background: alpha(theme.palette.blackMain, 0.2),
//   },
//
//   lightVideoPlay: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 0,
//     left: 0,
//     background: alpha(theme.palette.blackMain, 0.2),
//   },
//   mainSwiper: {
//     '& .swiper-wrapper': {
//       alignItems: 'center',
//     },
//   },
//   noImages: {
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   rightButton: {
//     position: 'absolute',
//     right: 0,
//     marginTop: 'auto',
//     marginBottom: 'auto',
//     textAlign: 'center',
//     bottom: 0,
//     top: 0,
//     marginRight: '-10px',
//     cursor: 'pointer',
//     zIndex: 15,
//   },
//   leftButton: {
//     position: 'absolute',
//     left: 0,
//     marginTop: 'auto',
//     marginBottom: 'auto',
//     textAlign: 'center',
//     bottom: 0,
//     top: 0,
//     marginLeft: '-10px',
//     cursor: 'pointer',
//     zIndex: 15,
//   },
//   icon: {
//     color: theme.palette.text.primary,
//   },
//   disabledIcon: {
//     opacity: 0.4,
//   },
//   wrapperBanner: {
//     height: '100%',
//     // borderRadius: '22px',
//     '& img': {
//       display: 'block',
//       margin: '0 auto',
//       width: '100%',
//       objectFit: 'cover',
//       maxHeight: '500px',
//       borderRadius: '22px',
//     },
//
//     '& .swiper-pagination-bullet': {
//       margin: '0 16px',
//       width: 16,
//       height: 16,
//       background: palette.greyColor,
//       opacity: 1,
//     },
//
//     '& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
//       background: palette.secondaryOrange,
//     },
//
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: theme.spacing(0),
//     },
//   },
//
//   wrapperPromotionsList: {
//     height: '100%',
//     // borderRadius: '22px',
//     '& img': {
//       display: 'block',
//       margin: '0 auto',
//       width: '100%',
//       objectFit: 'cover',
//       // maxHeight: '500px',
//       borderRadius: '22px',
//     },
//
//     '& .swiper-pagination-bullet': {
//       margin: '0 16px',
//       width: 16,
//       height: 16,
//       background: palette.greyColor,
//       opacity: 1,
//     },
//
//     '& .swiper-pagination-bullet.swiper-pagination-bullet-active': {
//       background: palette.secondaryOrange,
//     },
//
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: theme.spacing(0),
//     },
//   },
//
//   videoSlide: {
//     '& video': {
//       maxHeight: 500,
//
//       [theme.breakpoints.down('lg')]: {
//         maxHeight: 350,
//       },
//     },
//   },
//
//   attributeImage: {
//     borderRadius: 0,
//   },
// }));

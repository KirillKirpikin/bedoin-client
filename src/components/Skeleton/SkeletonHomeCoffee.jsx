import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonHomeCoffee = (props) => (
  <ContentLoader 
      speed={2}
      backgroundColor="#f5f5f5"
      foregroundColor="#dbdbdb"
      {...props}
    >
      <rect x="20" y="0" rx="8" ry="8" width="540" height="600" /> 
      <rect x="20" y="610" rx="5" ry="5" width="70" height="34" /> 
      <rect x="102" y="610" rx="5" ry="5" width="30" height="34" /> 
      <rect x="20" y="654" rx="5" ry="5" width="181" height="24" /> 
      <rect x="215" y="654" rx="5" ry="5" width="77" height="24" /> 
      <rect x="20" y="698" rx="5" ry="5" width="100" height="24" /> 
      <rect x="135" y="698" rx="5" ry="5" width="135" height="24" /> 
      <rect x="20" y="737" rx="5" ry="5" width="158" height="24" /> 
      <rect x="205" y="737" rx="5" ry="5" width="158" height="24" /> 
      <rect x="20" y="778" rx="10" ry="10" width="279" height="82" />
    </ContentLoader>
  )

export default SkeletonHomeCoffee;

//     viewBox="0 0 600 907"



// import React from "react"
// import ContentLoader from "react-content-loader"

// const MyLoader = (props) => (
//   <ContentLoader 
//     speed={2}
//     width={600}
//     height={907}
//     backgroundColor="#ebebeb"
//     foregroundColor="#8c8c8c"
//     {...props}
//   >
//     <rect x="20" y="0" rx="8" ry="8" width="540" height="600" /> 
//     <rect x="20" y="610" rx="5" ry="5" width="70" height="34" /> 
//     <rect x="102" y="610" rx="5" ry="5" width="30" height="34" /> 
//     <rect x="20" y="654" rx="5" ry="5" width="181" height="24" /> 
//     <rect x="215" y="654" rx="5" ry="5" width="77" height="24" /> 
//     <rect x="20" y="698" rx="5" ry="5" width="100" height="24" /> 
//     <rect x="135" y="698" rx="5" ry="5" width="135" height="24" /> 
//     <rect x="20" y="737" rx="5" ry="5" width="158" height="24" /> 
//     <rect x="205" y="737" rx="5" ry="5" width="158" height="24" /> 
//     <rect x="20" y="778" rx="10" ry="10" width="279" height="82" />
//   </ContentLoader>
// )

// export default MyLoader



// viewBox="0 0 422 652"


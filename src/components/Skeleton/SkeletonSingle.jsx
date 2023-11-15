import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonSingle = (props) => (
  <ContentLoader 
    speed={2}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="469" y="622" rx="5" ry="5" width="40" height="38" /> 
    <rect x="520" y="622" rx="5" ry="5" width="24" height="38" /> 
    <rect x="469" y="668" rx="0" ry="0" width="196" height="20" /> 
    <rect x="673" y="668" rx="5" ry="5" width="41" height="20" /> 
    <rect x="469" y="710" rx="5" ry="5" width="69" height="24" /> 
    <rect x="469" y="744" rx="30" ry="30" width="310" height="67" /> 
    <rect x="474" y="649" rx="0" ry="0" width="342" height="114" /> 
    <rect x="0" y="0" rx="5" ry="5" width="380" height="66" /> 
    <rect x="0" y="106" rx="5" ry="5" width="155" height="29" /> 
    <rect x="172" y="106" rx="5" ry="5" width="92" height="29" /> 
    <rect x="282" y="106" rx="5" ry="5" width="120" height="29" /> 
    <rect x="0" y="175" rx="5" ry="5" width="203" height="29" /> 
    <rect x="0" y="240" rx="5" ry="5" width="120" height="29" /> 
    <rect x="138" y="240" rx="5" ry="5" width="60" height="29" /> 
    <rect x="348" y="240" rx="5" ry="5" width="120" height="29" /> 
    <rect x="488" y="240" rx="5" ry="5" width="60" height="29" /> 
    <rect x="0" y="310" rx="5" ry="5" width="150" height="66" /> 
    <rect x="348" y="310" rx="5" ry="5" width="150" height="66" /> 
    <rect x="0" y="415" rx="10" ry="10" width="328" height="58" /> 
    <rect x="398" y="420" rx="10" ry="10" width="146" height="51" /> 
    <rect x="568" y="420" rx="10" ry="10" width="146" height="51" /> 
    <rect x="0" y="514" rx="30" ry="30" width="310" height="68" /> 
    <rect x="400" y="0" rx="5" ry="5" width="360" height="66" />
  </ContentLoader>
)

export default SkeletonSingle;

// viewBox="0 0 788 605"
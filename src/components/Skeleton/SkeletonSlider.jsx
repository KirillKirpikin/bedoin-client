import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonSlider = (props) => (
  <ContentLoader 
    speed={2}   
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <circle cx="509" cy="199" r="8" /> 
    <rect x="524" y="194" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="509" cy="229" r="8" /> 
    <rect x="524" y="224" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="509" cy="259" r="8" /> 
    <rect x="524" y="254" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="509" cy="289" r="8" /> 
    <rect x="524" y="284" rx="5" ry="5" width="220" height="10" /> 
    <rect x="0" y="0" rx="5" ry="5" width="450" height="450" /> 
    <rect x="469" y="622" rx="5" ry="5" width="40" height="38" /> 
    <rect x="520" y="622" rx="5" ry="5" width="24" height="38" /> 
    <rect x="469" y="668" rx="0" ry="0" width="196" height="20" /> 
    <rect x="673" y="668" rx="5" ry="5" width="41" height="20" /> 
    <rect x="469" y="710" rx="5" ry="5" width="69" height="24" /> 
    <rect x="469" y="744" rx="30" ry="30" width="310" height="67" /> 
    <rect x="474" y="649" rx="0" ry="0" width="342" height="114" /> 
    <rect x="0" y="481" rx="4" ry="4" width="105" height="105" /> 
    <rect x="115" y="481" rx="4" ry="4" width="105" height="105" /> 
    <rect x="230" y="481" rx="4" ry="4" width="105" height="105" /> 
    <rect x="345" y="481" rx="4" ry="4" width="105" height="105" />
  </ContentLoader>
)

export default SkeletonSlider


// viewBox="0 0 450 605"


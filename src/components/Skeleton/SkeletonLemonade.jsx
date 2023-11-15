import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonLemonade = (props) => (
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
    <rect x="20" y="20" rx="5" ry="5" width="382" height="400" /> 
    <rect x="20" y="423" rx="5" ry="5" width="40" height="38" /> 
    <rect x="71" y="423" rx="5" ry="5" width="24" height="38" /> 
    <rect x="20" y="465" rx="0" ry="0" width="196" height="20" /> 
    <rect x="224" y="465" rx="5" ry="5" width="41" height="20" /> 
    <rect x="20" y="505" rx="5" ry="5" width="115" height="24" /> 
    <rect x="150" y="505" rx="5" ry="5" width="90" height="24" /> 
    <rect x="20" y="540" rx="30" ry="30" width="310" height="67" />
  </ContentLoader>
)

export default SkeletonLemonade


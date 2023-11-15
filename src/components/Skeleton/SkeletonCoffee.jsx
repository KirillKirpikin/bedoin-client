import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCoffee = (props) => (
    <ContentLoader 
    speed={2}    
    
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="504" y="175" rx="3" ry="3" width="88" height="6" /> 
    <rect x="504" y="192" rx="3" ry="3" width="52" height="6" /> 
    <rect x="456" y="223" rx="3" ry="3" width="410" height="6" /> 
    <rect x="456" y="239" rx="3" ry="3" width="380" height="6" /> 
    <rect x="456" y="255" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="574" cy="235" r="20" /> 
    <rect x="552" y="89" rx="12" ry="12" width="422" height="422" /> 
    <rect x="20" y="432" rx="5" ry="5" width="77" height="32" /> 
    <rect x="111" y="432" rx="5" ry="5" width="30" height="32" /> 
    <rect x="20" y="474" rx="5" ry="5" width="200" height="22" /> 
    <rect x="235" y="474" rx="5" ry="5" width="60" height="22" /> 
    <rect x="20" y="515" rx="5" ry="5" width="150" height="22" /> 
    <rect x="185" y="515" rx="5" ry="5" width="150" height="22" /> 
    <rect x="20" y="557" rx="5" ry="5" width="227" height="22" /> 
    <rect x="20" y="597" rx="10" ry="10" width="226" height="56" /> 
    <rect x="20" y="672" rx="30" ry="30" width="311" height="66" /> 
    <circle cx="604" cy="787" r="50" /> 
    <rect x="20" y="20" rx="0" ry="0" width="382" height="402" /> 
  </ContentLoader>
)

export default SkeletonCoffee;

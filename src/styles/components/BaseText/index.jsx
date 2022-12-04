import React from "react"

const BaseText = ({ tag, className, children }) => {
  return (
    <>
      {tag === "p" && <p className={className}>{children}</p>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "small" && <small className={className}>{children}</small>}
    </>
  )
}

export default BaseText

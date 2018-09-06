import React, { cloneElement } from 'react'
import getSlugsToMatch from './get-slugs-to-match'
import { Consumer } from './flag-context'

export const checkFlags = (slug, slugs, flags) => {
  const slugsToMatch = getSlugsToMatch(slug, slugs)

  const matcher = item => flags.includes(item)

  return slugsToMatch.every(matcher)
}

const Flag = ({
  children,
  slug,
  slugs,
  ...rest
}) => {
  return (
    <Consumer>
      {flags => {
        const isEnabled = checkFlags(slug, slugs, flags)

        if (typeof children === 'function') {
          return children(isEnabled, rest)
        }

        if (!isEnabled) {
          return null
        }

        return cloneElement(children, rest)
      }}
    </Consumer>
  )
}

export default Flag

import React from 'react'
import hoistStatics from 'hoist-non-react-statics'
import getSlugsToMatch from './get-slugs-to-match'
import { Consumer } from './flag-context'

const getFlagStatuses = (
  slugsToMatch,
  children,
  flags
) => {
  const flagStatuses = {}

  slugsToMatch.forEach(slug => {
    flagStatuses[slug] = flags.includes(slug)
  })

  return flagStatuses
}

const withFlags = ({ slug, slugs }) => Component => {
  const FlagEnhancer = props => {
    const { children } = props
    const slugsToMatch = getSlugsToMatch(slug, slugs)

    return (
      <Consumer>
        {flags => {
          const flagStatuses = getFlagStatuses(
            slugsToMatch,
            children,
            flags
          )

          return (
            <Component
              {...props}
              flagStatuses={flagStatuses}
            />
          )
        }}
      </Consumer>
    )
  }

  return hoistStatics(FlagEnhancer, Component)
}

export default withFlags

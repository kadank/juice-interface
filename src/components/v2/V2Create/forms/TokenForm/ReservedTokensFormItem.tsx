import { Trans } from '@lingui/macro'
import { CSSProperties, useState } from 'react'

import { FormItemExt } from 'components/shared/formItems/formItemExt'
import { FormItems } from 'components/shared/formItems'
import { toMod, toSplit } from 'utils/v2/splits'
import { Split } from 'models/v2/splits'
import { defaultFundingCycleMetadata } from 'redux/slices/editingV2Project'

export default function ReservedTokensFormItem({
  hideLabel,
  initialValue,
  reservedTokensSplits,
  onReservedTokensSplitsChange,
  style = {},
  onChange,
}: {
  initialValue: number | undefined
  reservedTokensSplits: Split[]
  onReservedTokensSplitsChange: (splits: Split[]) => void
  onChange: (val?: number) => void
  style?: CSSProperties
} & FormItemExt) {
  // Using a state here because relying on the form does not
  // pass through updated reservedRate to ProjectTicketMods
  const [reservedRate, setReservedRate] = useState<number | undefined>(
    initialValue,
  )

  const hasReservedRate = !(
    reservedRate === undefined ||
    reservedRate.toString() === defaultFundingCycleMetadata.reservedRate
  )

  const [reservedRateChecked, setReservedRateChecked] =
    useState<boolean>(hasReservedRate)

  return (
    <div style={style}>
      <FormItems.ProjectReserved
        value={reservedRate}
        onChange={val => {
          setReservedRate(val)
          onChange(val)
        }}
        checked={reservedRateChecked}
        onToggled={checked => {
          setReservedRateChecked(checked)
          if (!checked)
            onChange(parseInt(defaultFundingCycleMetadata.reservedRate))
        }}
        hideLabel={hideLabel}
      />

      {hasReservedRate ? (
        <FormItems.ProjectTicketMods
          mods={reservedTokensSplits.map(split => toMod(split))}
          onModsChanged={mods => {
            const splits = mods.map(mod => toSplit(mod))
            onReservedTokensSplitsChange(splits)
          }}
          formItemProps={{
            label: <Trans>Reserved token allocation (optional)</Trans>,
            extra: (
              <Trans>
                Allocate a portion of your project's reserved tokens to other
                Ethereum wallets or Juicebox projects.
              </Trans>
            ),
          }}
          reservedRate={reservedRate ?? 0}
        />
      ) : null}
    </div>
  )
}

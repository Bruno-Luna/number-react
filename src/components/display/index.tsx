import { ReactElement } from 'react'
import * as Styles from './styles'
import { IDisplayProps } from './types'

const Display = (props: IDisplayProps): ReactElement => {
    return (
        <Styles.ContainerDisplay {...props}>
            {props.number} 
        </Styles.ContainerDisplay>
    )
}

export default Display
import React from 'react'
import { styles } from './styles'

export const Header = (props) => {
  const containerStyle = props.status === 'ORDERED' ?
    styles.container :
    { ...styles.container, ...styles.cooked }
  return (<div style={containerStyle}>
    <div style={styles.orderNo}>#{props.orderNo}</div>
    <div style={styles.notes}>{props.notes}</div>
    <div style={styles.time}>{props.time}</div>
  </div>)
}
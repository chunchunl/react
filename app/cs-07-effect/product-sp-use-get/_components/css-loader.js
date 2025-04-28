'use client'

import React, { useState, useEffect } from 'react'
import style from './css-loader.module.css'
export default function ComponentsCssLoader(props) {
  return (
    <>
      <div className={style.loader}></div>
    </>
  )
}

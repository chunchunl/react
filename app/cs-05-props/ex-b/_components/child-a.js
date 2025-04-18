'use client'

import React, { useState, useEffect } from 'react'

export default function ChildA({ pData = '' }) {
  return (
    <>
      <h3>ChildA</h3>
      <p>來自Parent元件的資料: {pData}</p>
    </>
  )
}
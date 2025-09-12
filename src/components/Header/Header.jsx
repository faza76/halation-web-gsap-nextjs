'use client';
import { useState } from 'react'
import Burger from '../Burger/Burger';
import { AnimatePresence } from "framer-motion";
import Stairs from '../Stairs/Stairs';
import Menu from '../Menu/Menu';

export default function () {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
      <div>
          <Burger openMenu={() => {setMenuIsOpen(true)}}/>
          <AnimatePresence mode="wait">
              {
                  menuIsOpen && <>
                  <Stairs />
                  <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                  </>
              }
          </AnimatePresence>
      </div>
  )
}
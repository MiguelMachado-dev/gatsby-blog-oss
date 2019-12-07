import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "styled-icons/octicons/LightBulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { ThList as List } from "styled-icons/typicons/ThList"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Back to Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          to="/search/"
          title="Search"
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>

      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Change Theme"
          className={theme}
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
        >
          <Light height={25} />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Change Grid"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Go to top!"
          onClick={() => {
            window.scroll({ top: 0, behavior: "smooth" })
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar

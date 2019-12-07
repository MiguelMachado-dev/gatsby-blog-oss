import React from "react"
import propTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styles"

const Comments = ({ url, title }) => {
  const completeURL = `https://blog.mmcoding.dev${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>

      <ReactDisqusComments
        shortname="blog-mmcoding-dev"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}

export default Comments

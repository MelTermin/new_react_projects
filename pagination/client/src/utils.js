const paginate = (followers) => {

  //console.log("followers", followers)
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(followers.length / itemsPerPage)
  //console.log(numberOfPages)

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage
    //console.log(start)
    return followers.slice(start, start + itemsPerPage)
  })
  //console.log(newFollowers)

  return newFollowers
}

export default paginate
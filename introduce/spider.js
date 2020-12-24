function spider(paws) {
  let oneDeegres = 360 / paws
  let startDeegres = 0
  repeat(paws, () => {
    left(startDeegres += oneDeegres)
    forward(90)
    home()
  })
}

spider(10)


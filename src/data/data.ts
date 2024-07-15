import { Comment } from "../types/typeComments";
import { Waiter } from "../types/typeWaiter";
import { Table } from "../types/typeTable";

export const Comments: Comment[] = [
  {
    id: "1",
    comment: "Me gustan los tacos de pastor",
    email: "prueba1@gmail.com",
    name: "prueba",
    img: "/images/comment1.png",
  },
  {
    id: "2",
    comment: "Me gustan los tacos de pastor",
    email: "prueba2@gmail.com",
    name: "prueba",
    img: "/images/comment2.png",
  },
  {
    id: "3",
    comment: "Me gustan los tacos de pastor",
    email: "prueba3@gmail.com",
    name: "prueba",
    img: "/images/comment3.png",
  },
  {
    id: "4",
    comment: "Me gustan los tacos de pastor",
    email: "prueba4@gmail.com",
    name: "prueba",
    img: "/images/comment4.png",
  },
];

export const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const waitersData: Waiter[] = [
  {
    nombre: "Alfredo Álvarez",
    apellido: "Álvarez",
    position: "Mesero",
    phone: "1234567890",
    email: "alfredo@example.com",
    urlImage:
      "data:image/jpeg;base64,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",
  },
  {
    nombre: "Taylor Smith",
    apellido: "Smith",
    position: "Mesero",
    phone: "0987654321",
    email: "taylor@example.com",
    urlImage:
      "https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg",
  },
  {
    nombre: "José de Pablo",
    apellido: "de Pablo",
    position: "Mesero",
    phone: "5555555555",
    email: "jose@example.com",
    urlImage:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhgVEhUYGBISGBgYGBISEhgREhEYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTY1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSs0NDQ0NDQ0NDQxNDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIANAA8wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYABwj/xABBEAACAQIDBQUFBwIEBQUAAAABAgADEQQhMQUSQVFxIjJhgZEGE0KhsRQjM1LB0fAH4RUWYqI0coKS8SRDc7LC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACYRAAICAQQDAQACAwEAAAAAAAABAhEDEhMhMQRRYUEycRQigQX/2gAMAwEAAhEDEQA/AMKCx8Ia0eZjqrHVWdFnnKI2lOPqkJVjiJCylEBUjqpDVIRqINSIiqSEVI6qSM+0UGmZ8M40ca7dxD1OUKY9UUWISIzqNTK8JVbvOF6ZmGmzx8bM3U2HyhpJc/Q8+OReMa/xBj3EY+VpJpYVF0Uel5JQR0TrZXha7clHibmOJs1j33Y+C5CTalRUUsxsB/LDxmc2pthmuoO6p+FTZvM6nyilJRNIY3Mufs+HTvMt/wDU1z6STh8XRvuq635WI/SYRKwvxuefHzk6ipPdyK57p4AcRzH0mTyM6V48fZvVQnMZjwN4RpnlMdhtpFCGJ3X/ADqbsufoy+BmywO1lqrYgb4AuV7rX4jiOkcZ2ZzwaVaYgWGFhlYSpNaOewVWPU1nKseRYUOx6kskqsbprJCrEUmCqwnXsmEqwnXsmSXfB1oaznQ2ynUlNs5SREmHOvFWcKWd46JchbToe7OhQWzx5Vimoo1IlK2KJ5nztGzWPgP54wonkujjV4AnpG32ifAdTc/KU5cnUkxSMh5x0Pkm1MeT8RPTIfONLihfNb9STI0QCMVFrS2io+G3STKe0FPH1lABCECWjT066nQiPo8y1EkN6/SEmJYaMYyeTVq0dUzM09pOPGSqe2DxEKFbD27ijvBAbBRvH/mOnoPrKPDbKeq53eHHMx3aNffrFhkG3fLsATZbDwapTXLMjjOHNNxbPY8eCcUvhR0fZAvq/atru39ZLo+xNfeuKi9c78tJtcEiy1opplOZZJHU8cV+Hm+0PYKqADTcMwzt3PSU706tFwrgq4uPAnget/We2AraxHpM37W7OR6LOAN+mN5T0lxySvkmUI0QsFWDoHHG4PgVJU/MSSFlP7Kg+4zN7O30U/rL1Vnox5imeJk/1m0Iqx6ms5FjyLHRKY9TSSFSJSSSVSSaJgIkKsnYPSPIkKun3bdImaroBkiokkMk5EjRD7GFpxwU48qQgkAoa93OkjcnQsKPmmKBOi2lmYloZGQ84gEMjIecBWDaKBFAiwFYgEWKBCtGJsWkM/X6QQI5RHa9fpBAgTYgEW0UCOU1G8AdLi/S+cOhrl0AtHeqopv2ioPPX+012JxVRGFOgm82WZNkQeJkbE4ZWrUGH4mW/wArbhI88pPxOEd+6bc7Zk+R1E8uc1J2e/ixOEasXDbVxVMg1KKNTPxU33iOouZscLjVenv20W5CzCtQdFqIrO71WUi7OVoqL3UBzY8M9f01fshSZVZTy0PjJbV8GlOuQ39p6aNuGhWLc0ol1v4mN4nHpiKb0wGSoUayutjkLgj9pA2jsuu2KVg7qofeP3jbrpl2ABa2nzzmhw2HbP3h3szu/mVTcbpNhfI6w4oVMw/s9j0SkFc2Ym/yA/SX1LFodGHrKLbOx0p4OlUX8Qswc55i7LblkQJn1qMNCZ6mFxlBUfPeWpQyu/3n/h6QjjnJNMieb09o1F0YyXhtu1d4C80cTBZX+o9MorlJSJM7srFO6Ay5RXI1mbidEZ/CxRBOxVvdtnwg4fBOw1M7GbOYU2N+Eji+zdatPQVSqo4wFxCxjE4e2sWjTFpaiqMZTlfQ+MUJ32nwiLTEMLCkLVIT7Q3KdD3YsOB3L2fNwEWcBCEYHARzgPOCIXAecBMGKJwigRisURQIonAQJsOiO16/QxAI5RGfr9DAAjE2cBFtFAhARktmkw7fdpWvcdjeFswQfdtnyszZTRYO3nMHhcQ47IY7jmxXUG+VxyPSaDC4tm30DbrsnYbjcHtkeO7p4zzM2LS/h7/i+QssfqqywrYtd8i4AU5scgDNF7NOpDFWBBGoOU84pbHdqhpVGe9t5WUAo4tfsknXhbWa3ZfslW3CgqVUS+e6yBjna176Z3t4TNRR0Sl74NViaqhd4kFAc2GYHC55R5gop73C18vWZTG7MqUiKNJ6rPU7RJI3ES2rnroBmdNLmKtdqWDNN2uwD2z7qEkLny5eFoq5E3xZXe1FRlw1JHFnqMWtcHs2UscubETKBZN2ptN8Q4epYbo3VRBZUHIXz85EAnrYMeiNM+a8vPu5G110gSsTDjtiOEQcP3xNWc0Wel+zoHuxeXyyg2D+GJeppMH2d0f4otKe0UUAHWOV8WGpt0mVrEmplLylS+6NzwmEuJHoQeqFsLajA6RijoJZvhKXxG/Uw0wNK2WnWXGaSowlhbldlaCIquL6y3TCoOAh7iDgPSGv4Gx9KneE6Wu6nIRYaw2Pp8sQhEAhTU5mdDIyHnAjh0HnGJggRQJ1oogSKIQggQxGJjlHvev0ggQqIz9foYgjJZwEWdFECQlNjcajP0lq1UpU3TkUO8h5g3/eVM0uMwXvKaMDZwq2bxK6HwnJ5VUj0v8Azm7Y8lUst2F+IzsZZbK23d1Tdq6gGz2XXjYzIpXekd2oLZ6/CehlphNvIpAuAo1Atn5+s5Emj1tSo9FqOqpcCwt59Jh/aHGCzKLXbXLPPh0AnJtKtiam5RHZuL67igE2JMj+1WGFN6a6ncLMx1ZmYgn/AGjKa4Y6sis5PMyuOFtf0UQhCIIQnqnzLOMDD98QzBw/fEGVE9K2D+GJejuyi2B+GJoLdmc77PQgriiidHaod3hLzDM3umDcomDKAkWzMkulkfpOeUrkejCOmFD+N0jNJjbWP4xcoxTGU0j0c2W9Q6HPOFeCBCAlEcizotp0BnzTFiARZZgcBHOA843HD3R5xksQRYgiwEEIQgiEIyWOUe96/QxBFo971+hiCMlixRJmz9lV65+5pO4/MBZB1c2Ues1ezP6fubHE1AgP/t0hvv5u2QPQNJc4x7LjilLpGOo0izBVFyf5c8hNtRpgALqAAOtspfbR9nKaUV+zUlV6d7hBd6ikZ3Y9p2FgRcniBrKOiZweTkcmlXB7HhYFji3dtnNhFbJhcdJZ4DYGGYbz0lLcyPpyjaLfSXGAyEwTOqQ9RwiILU1CqOCiwmL9u6Z95Tex3bMt+AIIIHWxPoeU3bNlKnH0N/sbu9v5BbX3jwE0x5NEk6Mc+HdxuN0eYiEJ6NtT+nilQcO+5UCi6VLtTdgBchu8lzfn0ExW0tiYjD/jUmVR8Ys9P/vW4HQ5z1Y5Iy6Pncvjzh2iuMDD98QzBwvfEpmUT0r2f/DE0BXITP7Da1MS5xTn3d11nNLs9PHwkTkSmpGl4/jSPdt0me2VTdnu2g5y7x/4bDwnOlTPQbuI7iKy21zjlDD3W8iJhFtdjLjDgbotLUq6M3FSfJEagRAtLIyJX1lKVmUoJcoanRbTpRB8zCLEiiaHOdHW7o841HGPZHnAQgiiIJwMZIYi3gz0/wBgfZlFpJiayBqtSz01cXWknwsBpvN3r8Ba1jeTKSSKhjc3SKHYHsRXqgPVPuaZGW+t6rgjUJlujxY38DNpsn2EwlOzMrVX51iGRT4IAFI63moQAjx4+EPDLYsvheYucmdscMV+DVCkADYWAyAAsB0jFQfWWFFOyZFqpINhN3IGQMbsSlUJaxSocyyaMebLoeuR8ZZqt06GKq5eIicU+xqTXRQ4X2fdGNnRlPMMh/WS12PWGgT/ALyP/wAy0RyDYyZTYmRtRL3ZFPT2PUPeZFH+necn13bfOTsJgEpm4uz6bzWLdBbIeUlVHtkNT8oJ5cvmZUYRRLnJgBtT42kam3bIOhyki33d+ZJ+cjV1swPO3zlElNtT2aw1W5ekFYnv0vu2vzO7kfMGZ7H/ANO3Rg2Gqb4GtOrZH/6XHZJ6hes9Bq07svjaOEbzHgBqRqfAS4zkv0xlghLtGN2VgnC+7dSj8VYWI/ceM0A2WwSwN5Z1aKm1xmultRH00g5WOOJRMe9Z6dTdk3GMxpM1+EqfaOtu4gZxauOLUCByhXQ9XZzbZFwL8ZsMBWBpg+E8vbDMGuQdZ6JseqDTXoJU4pLgzwyk5PUWZqCR3OcXEPZSZlcTt9lJAQm3hIirZrkdRs09xEmSG33/ACH0nTXSzn3EeJCFeBFlmLChHQecG8U6DzgI4GEDAigxk0Wns/s/7RiqVE92o/bt+RQXf/apnu1PLQZaboyFuQnk39MKIbHE/kouw6lkT6M09cpiYZHzR2+PGo2OqujDP9RxHWSKQ7QPlfmraehFvSBSW2nmOccYaEcPmLi466GZm4lH4xyjTrnHk/Eb/UvzBgXgAOHXUcxeKBb9YaDO8ULABmunykpDZAeJjVZezDbuL0gAK6k8pzHIwVbKK2kYDm72QPCMPT3kHMXHpJJE5E1HnEAzRzseS/P+COJl88/qf08oKsFW58frlEprfM5DgOJgA4Bf+af3jiaEcpy/KIGz8DADz324S1UGV+zdogJuNqf3mo9o9jPXcFCABzlX/lFlUuX7ueQlalVE6HdotXpqUvYSds0qpAuB5wl2YQlr6CYPE1XDt2jcEjWTGLl+l5cigro9OxDru5kSq9wn5RnMOcW51dvWXns7i3dtxjfkTKlBpWYwzxnLTRe+5XkJ0e+yPOkWb6T5unRJwnWeYFeFeBFvAVBToIMUQCjc/wBK/wDiqvP3OvL7yn/PKesUXvrrz5zyn+lX49f/AOJf/uJ6mliLjUaj9ZhP+R24f4onInmPDUR1wbdePP8AvI1HGIBbfQt+UOpYeV5KRiTnpINaIGGq/eIeDb/zP9o84sxEivSKEX4M1jwIZiw+tvKTK2dm5iMBVjiiNIY+sAErL2TG3PYEerd2MP8AhiADQMeSRkOckJGA+sMCCgnVHsJIEV2uwGu76XPPy+scBAzJuemXkJDwzl+0PiJI6aD5ASfSQDxbny6RgGATrkOXHz/aNYxSUO6bNlYnQZiP73KMY2kWpuoNmZWAI1BIIBHSIOjL7W2++GcK6q1+KmQn9tFZSpQjeFtZWDZb1CSXLsOLSNifZ6oO0SLLnlLWNGUs8l+Gx/zMChO41razE1am8zNzJM0JwzrTsdAJm+MeONWTnmpVQoMsti4jcqq3I59JWiO0GsZo+VRzx4kmelf4rS/OPWdPI8TijvmxOsSRsfTo/wAyPowUWJOmlnMcDCgxToPOFgLOggxxUY6A+kBG6/pSf/UVufuhlx76/uPWbPG7bU3RVuGFt7fAOfLIzyTYxr0q6VKO8rqwzBAuPiU3ysRcZzZVMer1e1RLO51FMOW43vn/AATmzyp8HpeHFSXK6LQBx2lcHePdZcz1YftLbC7QqoR2t1cuO8nmDp8pT00UgFUYAa2DADqJbUiwW6WcflJzPQ/ofWcltHc6a5L/ABG0lakd/ssMxa5BI5ch15x3AYkPTNtUPymbR1JBXeXPuG62PKx0k/Z9UUq6A3CV7owOiva6euY9JvDJfDOeeKlaL2m0kqZAZ90kHhJC1OyDzmxgSavdMjO33YMed+xIT1PufO0QHYcamO0muQOcjriURbuwHUgSPg9rUd4kuL8AATl5D+Xg2kNJvovC8r9q4gLTY+H0ziLjUIvvDpex9Jm/aHbSZoHGQItcZkwtBTNDggAqhe7ugAeFspMGJRe86r/zOFPzM89xe23dAEcqlgAEO6WAFrsRmb8tPrIuGqAGYSzpOkjeOBtW2eo0sVTPddT0ZT+seImFw2YljRxb080OXFD3G8PDqPnpCOa+0EsFdMo8fUq0feFN2yu6qPiazkD6SZQSs9AvUaxK33QNJFxaJ9oaoCSKlqqoxuF3+8OVw4ceUcrbRO4RfhO1R4tHlyyvU1Iu8bYUzfS2cw2IUBzum4mhxu0b02B5TF4XEXZrnjBRYpTi+EWAkjCYffbdva/GQhVHOVOIx7++3UawEaTfRLlGPMjVf5fX84nSg/xN+c6Gmfse7h9GMXAufht1MeXZjcWA+ctPsZHdcjwPaEXdqDgrDwO6YWGkgpskcWPlJKbOTlfqY8uIA76svUXHqJIp1FbusD5wselDKYRBoo9JIWmP4I8ohqkVjUUdhVG8L8bgdSCBJoU2urFWHxDUSMqcuEkBszOPyV1I9Lw5cOJLweLrI2e66/6fu3HqbH5aS6w20KbrYuEqLxPZIPip4eHpM6M5MwmFF7zmUmdjii6w+KVu+QCOXdJHEeEdx+KR0KhrXzBAuysM1YeIIB8pGRV8IrUweEpSaJpMsq22Q6I5yqMo30seywybyuLjwIi1NuLugAHLnlKtqEJcHeab0vRlsx9k2p7QsV3VXz1kJ8dVYboyGuklU8ABH1oKOsTnJjUIL8KWphXc3Ylj45xzDUyrAczLR/CVG0dsUqFr9qoe6i5sf2HicpDRS+GhbC8GIsfSY/2kwdPdYELvcwBvH01jdf2gr1ct4In5UzY9WP6WjNPPPU+pMUpL8LjB9srdmJU92E3GG5dVuCoIvkc+FvpLrBYV73P9pIw6y2w1OTVjbofwdOwkuquUfw1IWgY07ovyz9M5qo0jJyswmP2mvvLA33VC36Esf9zNGxjL5X1lBgMJUdrlTccTJ1bZ9W6kA2Buek9RNJUeBKMpNuixxOOG4eky5xEs9wsN2+Y1lfWwtuIlJozlGXaOwuJa5uTCp1AWvxkahkxHP0i7pB09I1RlK6JZqidI3vPCdLMuS1CQxTjgSEKYnIexQ0EgPgkbVRfmMjJaoIe6IrHRW/YCO47DwPaHzhAVl4K48OyZYDwEMCFhpK1ccB+IjJ1W49RJdKor9pSCNLjmP4JIK84BpBcwAM87ZX/lplmWqJ0eO3Gf9jlNTLGghtI+GqA5Szp0rcZxUeg2FQQ3sZKCwKSR16luspIlhqJIQyOhJj6rKRLCd8oDnK7GwGZJyAHiZHx+0UpDtG7HRB3j+w8ZlNobQese2bJwpr3fP8x6wboErJu2Nvs10w2nGqRcf9AOvU5dZnkwuZZiS7Zl2JLHzMlCpbK0X3gmbtm0aR1KlJdFCDrGlqiSqdYRUOybhl8Za0DbQymTEiS6OJyloho0uEq2sOMLaAuLHiJC2U+eflJeOfOax5RjLhkGnh0Hwj0gYlF3DYcJI94BGK2IFjNUYMzNTZoRmZQbub5ym2phGCkhSegm0xFZZXVcQJrGTRzzxxaoyOF2I7oGzXwtHv8AAHHxTRnFARBigZeuRjs46MwdlVJ01F15TobjFsQKeEIpWKE5yDaghFtOEK8B0coh7sAGFaAC5RGW4I5xd2EFiGnXREw5IbdbX6zTU6JWnvk2W3GVFKgrOgI1ZRfQi5HGa1KAyW1wvPOYbPJ1rOnHrkzlTaFj3sodDFBjlNDR2bRdiWpIT401P6SLWwqrUIVQBwCgADoBDZ+hv/BMMjspZVJUanQeskJQZhmSAfy6j1lhssXRl/mkNKdjYy4wSM5ZJMz1f2UVrlHbfOf3naufE6yLiPZJ0BKsG6ZfKbJVsZJdbrYcY3GL/BKcl+nmVXY1QAEobHQ2yMjtsxx8B8p6wlAWAtkIj4VSO6PSTtRLWaR5KcIw1UjqLQ1okcJ63QwqKLBRDOGTiinqin9ItqJW+/R5H7o8jHERwLhWt0Np6ylFB3UUdFA+ki7Z/wCHqeC39CDDaiG+/Ri9iY67br5Ec5PxeKDNloPn4yvDf+YYMcY0TLJqHC8ado6qzmUWlGZAqi8g1qRlw9K/CNnCy1KjOUbKBsKxkihgTLlcLHkpeEHISxIrRhJ0tvdzpOovSj//2Q==",
  },
  {
    nombre: "José de Pablo",
    apellido: "de Pablo",
    position: "Mesero",
    phone: "5555555555",
    email: "jose@example.com",
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPlchBHmSYedes6FHWvfPO57HWlsYcNLd8xjiJYVAOl6atP1Ui_Y2mEw6JdI02eh7wVo&usqp=CAU",
  },
  {
    nombre: "José de Pablo",
    apellido: "de Pablo",
    position: "Mesero",
    phone: "5555555555",
    email: "jose@example.com",
    urlImage: "",
  },
  {
    nombre: "José de Pablo",
    apellido: "de Pablo",
    position: "Mesero",
    phone: "5555555555",
    email: "jose@example.com",
    urlImage: "",
  },
];

export const Tables: Table[] = [
  { 
    id: "1", 
    num_mesa: "Mesa 1", 
    id_admin: "1",
    imgSrc: "", 
    num_sillas: "4",
    createdAt: "2021-09-10T17:30:00.000Z"
  },
  { 
    id: "2", 
    num_mesa: "Mesa 2", 
    imgSrc: "",
    id_admin:"1", 
    num_sillas: "4",
    createdAt: "2021-09-10T17:30:00.000Z" 
  },
  { 
    id: "3", 
    num_mesa: "Mesa 3", 
    imgSrc: "",
    id_admin: "1", 
    num_sillas: "4",
    createdAt: "2021-09-10T17:30:00.000Z"
  },
  { 
    id: "4", 
    num_mesa: "Mesa 4", 
    imgSrc: "", 
    id_admin: "1", 
    num_sillas: "4",
    createdAt: "2021-09-10T17:30:00.000Z"
  },
  { 
    id: "4", 
    num_mesa: "Mesa 4", 
    imgSrc: "", 
    id_admin: "1", 
    num_sillas: "4",
    createdAt: "2021-09-10T17:30:00.000Z"
  },
  { 
    id: "4", 
    num_mesa: "Mesa 4", 
    imgSrc: "", 
    id_admin: "1", 
    num_sillas: "4",
    createdAt: "2021-09-10T17:30:00.000Z"
  },
];

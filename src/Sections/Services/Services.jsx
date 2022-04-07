import React from 'react'
import styles from "./styles.module.scss"
import { final1,final2,final3,final4,final5,final6,final7 } from '../../Assets/icons'
import { Service } from '../../Сomponents/atoms'


const Services = () => {
  const info = [{
      title:"Образование",
      text:"Доступ к качественному  образованию",
      beforeImg:final1,
  },
  {
    title:"Здравоохранение",
    text:"Забота о здоровье",
    beforeImg:final2,
},
{
    title:"Экономическое благосостояние",
    text:"Расширение экономических возможностей",
    beforeImg:final3,
},
{
    title:"Экология",
    text:"Сохранение и поддержание экосистем",
    beforeImg:final4,
},


]
const info2 = [{
    title:"Культура",
    text:"Поддержка национальной культуры и наследия",
    beforeImg:final5,
},{
    title:"Наука",
    text:"Развитие научно-исследовательских практик",
    beforeImg:final6,
}
,{
    title:"Правовая защита",
    text:"Защита основных прав и свобод человека и гражданина",
    beforeImg:final7,
}]
 return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>
        Направления деятельности
        </h1>
        <div className={styles.content_wrapper}>
            <div>
                <div className='wrapper'> {info.map((item)=>{
                        return <Service title={item.title} text={item.text} beforeImage={item.beforeImg}/>
                    })}
                </div>
            
            </div>
            <div className={styles.secondPart}>
            {info2.map((item)=>{
                    return <Service title={item.title} text={item.text} beforeImage={item.beforeImg}/>
                })}
            </div>
        </div>
        <div className={styles.backgroundImage}>
        </div>            

    </div>
  )
}

export default Services
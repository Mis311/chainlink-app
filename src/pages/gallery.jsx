import Link from "next/link";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [language, setLanguage] = useState("English");
  const [text, setText] = useState("");

  const texts = {
    English: `It happened during a dinner.

    "—Don't rejoice just because the whip that torments you has broken. From the snake's seed, a basilisk will emerge and devour birds."
    
    It was the moment when the prophet sang with a tenor voice. A heavy knock came from the front right door. The music was not particularly loud to begin with. It was just loud enough for the conversation between the two people at the dining table to pass through. In the first place, it was a somewhat eccentric choice to play opera music during a meal, but it was nothing more than a selfish indulgence after being pressed for time.
    
    With that in mind, she gave permission to enter. The suited man quietly opened the tall wooden door with a subdued custard-colored wall and entered.
    She blinked at the familiar sight of her advisor.
    The man feigned an apology for interrupting their meal and circled around the table to approach her. He whispered in her ear, reporting the information.
    Without blinking, the woman slowly changed the direction of her face and looked up, gazing at the tightly arranged forehead of her advisor.
    "Yes, that's what I thought," she said.
    The man, though not old, nodded with a face that was difficult to read due to deep wrinkles.
    "It's up to you to decide."
    
    "To let me kiss you, Johanan!"
    The singer portraying the girl who passionately loved the prophet sang out loudly. The stage had entered the third act.
    
    The warm salad sprinkled with buffalo milk-made blue di bufala, topped with Italian cicory, had already cooled down. The vegetables, which resembled raised, red meat, had white veins running through their fluttering bodies. As she brought a forkful to her mouth and chewed, the aroma of the ripe, simmered Vin Cotte grapes that had been scattered on the white plate gradually spread in her mouth.
    
    Setting down her fork, she rang the golden bell on the table.
    
    "You can serve the next course now."
    
    The chef momentarily looked puzzled, but when he saw the woman's face, he quickly bowed his head and left the room with the plate.
    "George," the woman spoke, addressing the man sitting to her left at the same table.
    
    The man's gentle eyebrows twitched. His deep brown eyes, set in sunken sockets, were fixed on the woman. They exuded a calmness and intellect, akin to an aged oak tree, attracting elite individuals who were inexplicably drawn to conversing with him.
    Despite being in a position that could potentially lead to handling sensitive matters, as if handling a sore spot, it was undoubtedly his talent and the expertise of the selection committee that had recognized it. The woman analyzed the situation calmly, realizing this.
    
    "George," she called his name again, this time looking directly into his eyes. George continued to gaze back at her, without any hint of fear—rather, he was filled with a sense of trust.
    
    "Millions of lives must be sacrificed."
    
    When those words were dropped on the dining table, the woman felt as if she finally understood the meaning of her eyes "clouding over" for the first time. The moonlight quickly disappeared behind the clouds, causing the colors to darken by one shade. The silence seemed to be engulfed by the veil of the night. A small death separated from the bed.
    However, it was still just a fleeting moment.
    
    The man's broad hand was gently placed on the white tablecloth. The woman took a breath and extended her left hand to hold his. It was the warmth of his palm. Tonight, many lives would come to an end.
    
    Whether the man understood the unwavering determination in the woman's demeanor or if he was verifying something, he withdrew his hand. The air left by the departing man was unbelie
    
    vably cold.
    
    The woman did not apologize. She knew that it would be nothing more than a superficial gesture.
    In a modern sense, there is an aspect of how much one can deny primitive desires and how circuitous one can be in reaching the final primitive decision. In that regard, the woman wanted to be at least honest.
    
    When George nodded calmly and pulled back his chair, standing up, she exhaled, realizing she had forgotten to breathe.
    
    Suddenly, a creaking sound interrupted her thoughts. It was the violin strings producing a short note before transitioning to the next melody. The voice of the girl, filled with intense passion, resonated in the empty room. It seemed louder than it should have been, she thought.
    
    "Go and tell the soldiers to listen to the orders His Majesty has granted me."
    
    As she was about to say "Stop the music," her intake of breath was interrupted by another knock. It was not the advisor or the aide she had expected, but the white-clad chef.
    
    Perhaps he, too, knew that he was out of place, as he held a main dish in his hands, seemingly hoping to be excused and observing her with an expression of wanting to give the signal for departure.
    Aware of this, she casually thanked him and waited for him to place the dish, adorned with a gold rim and an emerald vine pattern, silently on the table. After a brief pause, she watched him retreat, feeling a sense of unease. It was at that moment, when she plunged the knife into the duck meat, which had turned reddish and resembled a wound, that she understood what it was.
    
    The man had prepared only one plate.
    The generous amount of marmalade sauce that had been poured according to her preference was sloppily spread on the plate. The fibers slackened, and the oil and bodily fluids mixed slowly.
    Things that intersect. Things that don't intersect.
    
    The stage was heading towards its final act. The girl raised her voice like a mad bird.
    
    Open your eyes, Johanan.
    Are you afraid to look at me with your eyes open, or is it because I'm frightening?
    ...
    Your red tongue no longer moves. It remains silent. Johanan, the crimson snake that spat venom at me has stopped moving. Ah, how strange!
    
    Your neck belongs to me.
    What is mine, I will do with it as I please.
    Even if I throw it to a dog or offer it to a raptor.
    
    Ah, Johanan, Johanan.
    
    "Now, you alone are beautiful."
    
    Passing through the door, the artificial light illuminated her path. The black-suited subordinates cleared the way. She looked up straight ahead, taking a big step forward to the east.
    
    "Miss President."
    

    ---"The Head of Johanan"
    Or, alternatively, the proposition—Should the president press the nuclear button.
    
    ----------------------------------------------------------------
    "My suggestion was quite simple: Put that needed code number in a little capsule, and then implant that capsule right next to the heart of a volunteer. The volunteer would carry with him a big, heavy butcher knife as he accompanied the President. If ever the President wanted to fire nuclear weapons, the only way he could do so would be for him first, with his own hands, to kill one human being,...., 
    He has to look at someone and realize what death is—what an innocent death is. Blood on the White House carpet. It's reality brought home.
    When I suggested this to friends in the Pentagon they said, "My God, that's terrible. Having to kill someone would distort the President's judgment. He might never push the button."
    — Roger Fisher, Bulletin of the Atomic Scientists, March 1981`,
    Spanish: `
    La cabeza de Juan el Bautista
    
    Ocurrió durante una cena.

    "―No te regocijes solo porque el látigo que te atormenta se ha roto. De la semilla de la serpiente surgirá un basilisco que devorará a las aves."
    
    Ese fue el momento en que el profeta cantó con una voz de tenor. Un fuerte golpe resonó desde la puerta de la derecha del frente. La música no era especialmente alta en un principio. Era lo suficientemente alta como para que la conversación entre las dos personas en la mesa de la cena se escuchara. En primer lugar, era una elección algo excéntrica tocar música de ópera durante una comida, pero no era más que un capricho egoísta después de haber estado presionada por el tiempo.
    
    Con eso en mente, ella dio permiso para entrar. El hombre de traje abrió silenciosamente la alta puerta de madera con una pared de color crema apagado y entró.
    Ella parpadeó al ver la vista familiar de su asesor.
    El hombre fingió disculparse por interrumpir su comida y rodeó la mesa para acercarse a ella. Susurró en su oído, informándole la información.
    Sin parpadear, la mujer cambió lentamente la dirección de su rostro y levantó la vista, contemplando la frente perfectamente arreglada de su asesor.
    "Sí, eso es lo que pensé", dijo.
    El hombre, aunque no era viejo, asintió con un rostro difícil de leer debido a las arrugas profundas.
    "Depende de ti decidir".
    
    "¡Déjame besarte, Johanan!"
    La cantante que interpretaba a la chica que amaba apasionadamente al profeta cantó con voz alta. El escenario había entrado en el tercer acto.
    
    La ensalada tibia esparcida con queso azul di bufala hecho con leche de búfalo, cubierta con radicchio italiano, ya se había enfriado. Las verduras, que se asemejaban a carne roja y levantada, tenían venas blancas corriendo por sus cuerpos que se movían al viento. Mientras llevaba un bocado a la boca y masticaba, el aroma de las uvas Vin Cotte maduras, que habían sido esparcidas en el plato blanco, se extendió gradualmente en su boca.
    
    Dejando el tenedor, tocó la campana dorada sobre la mesa.
    
    "Ahora pueden servir el siguiente plato".
    
    El chef se quedó momentáneamente perplejo, pero al ver el rostro de la mujer, rápidamente inclinó la cabeza y salió de la habitación con el plato.
    "George", la mujer habló, dirigiéndose al hombre sentado a su izquierda en la misma mesa.
    
    Las suaves cejas del hombre se movieron ligeramente. Sus profundos ojos marrones, enmarcados en órbitas hundidas, estaban fijos en la mujer. Emitían una calma e inteligencia, similares a un viejo roble, atrayendo a personas de élite que eran inexplicablemente atraídas a conversar con él.
    A pesar de estar en una posición que potencialmente implicaba manejar asuntos delicados, como si estuviera lidiando con un punto sensible, sin duda
    
     era su talento y la experiencia del comité de selección lo que lo había reconocido. La mujer analizó la situación con calma, dándose cuenta de esto.
    
    "George", volvió a llamar su nombre, esta vez mirándolo directamente a los ojos. George continuó mirándola, sin rastro de miedo, más bien lleno de confianza.
    
    "Se deben sacrificar millones de vidas".
    
    Cuando esas palabras se dejaron caer sobre la mesa de la cena, la mujer sintió como si finalmente entendiera el significado de que sus ojos se "nublaran" por primera vez. La luz de la luna desapareció rápidamente tras las nubes, oscureciendo los colores en un tono. El silencio parecía ser engullido por el velo de la noche. Una pequeña muerte separada de la cama.
    Sin embargo, fue solo un momento fugaz.
    
    La mano ancha del hombre se posó suavemente sobre el mantel blanco. La mujer respiró hondo y extendió su mano izquierda para tomar la suya. Era el calor de su palma. Esta noche, muchas vidas llegarían a su fin.
    
    Ya sea que el hombre entendiera la determinación inquebrantable en la actitud de la mujer o si estaba verificando algo, retiró su mano. El aire dejado por el hombre al marcharse era increíblemente frío.
    
    La mujer no se disculpó. Sabía que no sería más que un gesto superficial.
    En un sentido moderno, hay un aspecto de cuánto se pueden negar los deseos primitivos y qué tan indirecto se puede ser para llegar a la decisión primitiva final. En ese sentido, la mujer quería al menos ser honesta.
    
    Cuando George asintió con calma y se apartó de la silla, poniéndose de pie, ella exhaló, dándose cuenta de que se había olvidado de respirar.
    
    De repente, un sonido chirriante interrumpió sus pensamientos. Eran las cuerdas del violín produciendo una nota corta antes de pasar a la siguiente melodía. La voz de la chica, llena de pasión intensa, resonaba en la habitación vacía. Parecía más alta de lo que debería haber sido, pensó.
    
    "Ve y dile a los soldados que escuchen las órdenes que Su Majestad me ha concedido".
    
    Cuando estaba a punto de decir "Detengan la música", su inhalación de aire fue interrumpida por otro golpe. No era el asesor ni el asistente que esperaba, sino el chef vestido de blanco.
    
    Quizás él también sabía que estaba fuera de lugar, sosteniendo un plato principal en sus manos, aparentemente esperando ser excusado y observándola con expresión de querer dar la señal de partida.
    Consciente de esto, ella casualmente le agradeció y esperó a que colocara el plato, adornado con un borde dorado y un patrón de enredadera de esmeraldas, en silencio sobre la mesa. Después de una breve pausa, lo vio retirarse, sintiendo una sensación de inquietud. Fue en ese momento, cuando clavó el cuchillo en la carne de pato, que se había vuelto rojiza y parecía una her
    
    ida, que entendió qué era.
    
    El hombre solo había preparado un plato.
    La generosa cantidad de salsa de mermelada que se había vertido según su preferencia se extendía descuidadamente en el plato. Las fibras se aflojaron y el aceite y los fluidos corporales se mezclaron lentamente.
    Cosas que se cruzan. Cosas que no se cruzan.
    
    El escenario se dirigía a su acto final. La chica levantó la voz como un pájaro loco.
    
    Abre los ojos, Johanan.
    ¿Tienes miedo de mirarme con los ojos abiertos, o es porque soy aterradora?
    ...
    Tu lengua roja ya no se mueve. Permanece en silencio. Johanan, la serpiente carmesí que me escupió veneno ha dejado de moverse. ¡Ah, qué extraño!
    
    Tu cuello me pertenece.
    Lo que es mío, haré con él lo que quiera.
    Incluso si lo arrojo a un perro o se lo ofrezco a un ave rapaz.
    
    Ah, Johanan, Johanan.
    
    Al pasar por la puerta, la luz artificial iluminó su camino. Los subordinados vestidos de negro abrieron el camino. Ella miró hacia adelante, dando un gran paso hacia el este.
    
    "Señorita Presidenta".
    
    --- "La Cabeza de Johanan"
    O, alternativamente, la propuesta: ¿Debe el presidente presionar el botón nuclear?
    
    ----------------------------------------------------------------
    "Mi sugerencia era bastante simple: Colocar ese número de código necesario en una pequeña cápsula y luego implantar esa cápsula justo al lado del corazón de un voluntario. El voluntario llevaría consigo un gran y pesado cuchillo de carnicero mientras acompañara al Presidente. Si alguna vez el Presidente quisiera disparar armas nucleares, la única forma en que podría hacerlo sería que primero, con sus propias manos, matara a otro ser humano,...,
    Tendría que mirar a alguien y darse cuenta de lo que es la muerte, de lo que es una muerte inocente. Sangre en la alfombra de la Casa Blanca. Es la realidad que llega a casa.
    Cuando sugerí esto a amigos en el Pentágono, dijeron: 'Dios mío, eso es terrible. Tener que matar a alguien distorsionaría el juicio del Presidente. Tal vez nunca presione el botón."
    — Roger Fisher, Boletín de los Científicos Atómicos, marzo de 1981    
    
    `,
    Chinese: `
    约翰洗者的头颅

    这是在晚餐席上发生的事情。
    
    『―――不要因为鞭子打断了折磨你的快感而高兴。从蛇的种子中产生出蛇发，它的后代会吞食鸟儿。』
    
    预言者用男高音歌唱着。就在此时，正门右侧传来沉重的敲门声。本来音乐声并不大，只足够让桌上两人的对话传过来。总而言之，流派在用餐时播放歌剧这件有些奇怪的事情，只是她被时间逼迫下的任性而已。
    
    考虑到这些，她允许他进入了房间。她静静地打开了那扇颜色柔和的卡士达色墙上的高大木制门，一个穿着西装的男人走了进来。
    她眨了眨眼，看到了熟悉的参谋模样。
    男人表面上为在用餐时的失礼道歉，然后绕过餐桌走向她，低声向她报告。
    女人没有眨眼，反而相对缓慢地转动脸部，抬起下巴，凝视着参谋整洁紧凑的额头。
    "嗯，是这样的。"
    男人虽然并非老年，但面部皱纹深深，难以读取他的表情。
    "请您决定吧。"
    
    
    
    
    "让我亲吻你，约翰南！"
    预言者痴迷地向扮演少女角色的歌手高声呼喊。舞台已进入第三场。
    
    用水牛奶制作的意大利芝士洒在热沙拉上已经凉了。那些看起来像红肉的蔬菜外表鼓起，表面有白色纹理。用叉子送入口中咀嚼，嘴里弥漫开来的收敛葡萄煮浓香气渐渐弥漫开来。
    
    放下叉子，她按响了桌上的金色门铃。
    
    "你可以上下一道菜了。"
    
    厨师一瞬间露出疑惑的表情，但看到女人的脸后，急忙低头道歉，带着盘子一起离开房间。
    
    
    "乔治。"
    
    她开口了。对准坐在她左边的男人。
    
    男人温和的眉毛微微动了
    
    一下。深陷眼眶内的深棕色瞳孔注视着女人。那种老橡木般的稳重和智慧伴随着他，让他经常受到渴望与他交谈的精英们的纷纷围绕。
    尽管可能会像触摸肿块一样对待，但他能避免这种情况，完全归功于他的才能，以及选择他的招聘委员会的能力，她冷静地分析着。
    
    "乔治。"
    
    然后，她再次喊出了他的名字，这次她看着他的脸。
    乔治静静地凝视着她。他没有恐惧，他的眼中充满着信任这一情感。
    
    "数以千万计的人必须死去。"
    
    
    当这句话落在餐桌上时，她第一次感觉到眼睛"翳动"这个词是什么意思。月光迅速被云层遮挡，色调似乎降低了一级。寂静仿佛被夜幕吞噬。小小的死离开了床。
    但这只是瞬间的事情。
    
    男人的宽手轻轻地放在白色桌布上。她停下呼吸，伸出左手握住了他的手。温暖的手掌。今夜，许多生命将结束。
    
    男人用一种温和而思索的眼神凝视着女人，似乎在劝诫，或者是在确认。那双似乎在思索的眼睛中蕴含着自我质问的力量。或者那只是女人的愿望。每个人都在等待一个退路。变化是可怕的。她想留在现状中......
    
    但她仍然必须前进。她认为这是她被赋予的使命。她认为自己是空虚的。如果是虚无，那么至少应该是能够吞噬慈悲和痛苦的虚无，她这样想。
    
    男人读懂了女人不变的态度吗？他松开了手。男人离去的气息多么冷。
    
    女人没有道歉。她知道这只是表面文章。
    在现代，它有一面是如何否定原始欲望，最终作出原始决定所需的绕圈子的过程。如果是这样，女人至少希望自己是诚实的。
    
    
    
    男人轻轻点头，推开椅子，站了起来。他宽阔的背转身打开了紧挨着左手丰度架的门把手，看着他消失在门后面，女人松了一口气。
    
    突然，尖锐的摩擦声让她觉得很吵，小提琴弦在转换下一个乐章之前发出短暂的声音。在空无一人的房间里，少女激昂的声音回荡。明明不应该这么喧闹，她心想。
    
    "去告诉士兵们，陛下要他们听从我的命令。"
    
    她想说的话被吸入胸腔的气息打断了，又一次被敲门声中断了。站在那里的不是她预料中的参谋或亲信，而是穿着白色制服的厨师长。
    
    他也许知道自己不适合现场，手拿着主菜，尽管如此，他看起来渴望听到她的退出声。
    女人知道这一点，但她优雅地道谢，等待男人无声地将镶有金边和蔓藤纹的翡翠碟子放在餐桌上。然后稍等片刻，看着男人离开后，她感到一丝不自在，但当她刺入滴血的鸭肉，感受到刀子刺入的时候，她明白了那是什么。
    
    男人只准备了一人份。
    她喜欢的柚子酱洒得很多，凌乱地散落在盘子上。纤维松弛，油和体液缓慢混合。
    交织的东西。不交织的东西。
    
    舞台正走向尾声。少女像疯狂的鸟一样尖叫。
    
    睁开眼睛，约翰南。
    睁开眼睛看着我不是因为我害怕吗？
    ...
    你的红舌已经不再动了。不再说话。约翰南，那只对我吐毒的血红蛇已经停止了。啊，真是奇怪！
    
    
    你的头颅属于我。
    我的东西，我想怎么处理就怎么处理。
    就算是给狗，也可以让猛禽撕咬。
    
    啊，约翰南。约翰南啊。
    
    
    "如今，只有你一个人美丽。"
    
    女人走过门，沿着红地毯
    
    直走向东方。在与随从商讨后续行动的同时，参谋通过电话听到了其他国家紧急会议的决定。当他们走到白色门口并打开时，她想起了在远处房间倒在地上的冷漠身体。虽然她不知道如何实现，但她想到了男人的身体缓缓流出的液体，渐渐浸湿了地板。这是女人的幻想，实际的处决场肯定是极其整洁的。
    
    "请这边走，"
    
    人造光线照亮了她的面前。穿着黑色制服的下属们开路。女人抬起头，笔直地迈出了一大步。
    
    "总统女士"。
    
    或者，一个命题：总统是否会按下核按钮。
    
    
----------------------------------------------------------------
「我的建议非常简单：将那个所需的代码编号放入一个小胶囊中，然后将该胶囊植入一位志愿者的心脏旁边。志愿者将携带一把大而重的屠夫刀陪同总统。如果总统想要发射核武器，他唯一的选择就是他首先用自己的双手杀死一个人...，
他必须看着某个人并意识到死亡是什么，无辜死亡是什么。白宫地毯上的鲜血。这是现实带回家。
当我向五角大楼的朋友们提出这个建议时，他们说：“天哪，那太可怕了。必须杀人会扭曲总统的判断力。他可能永远不会按下按钮。”
— 罗杰·费舍尔（Roger Fisher），《原子科学家通讯》（Bulletin of the Atomic Scientists），1981年3月`,
    Korean: `
    요한 세례자의 머리
    
    그것은 야식을 먹는 동안의 일이었다.

    "너를 괴롭히는 채찍이 부러졌다 하여 기뻐하지 말라. 뱀의 씨에서 바실리스크가 태어나 그의 자식이 새들을 삼킬 것이다."
    
    예언자가 테너로 노래를 부르던 그 때, 정면 오른쪽 문에서 무거운 노크 소리가 들려왔다. 원래 음악 소리는 그리 크지 않았다. 다이닝 테이블에서 두 사람이 대화를 나눌 정도로 작았다. 무엇보다 식사 중에 오페라를 틀는다는 것은 시간에 쫓기는 내가 범한 이기적인 행동에 불과했다.
    
    그런 생각을 하던 그녀는, 부디 들어오세요,라며 들어오라 허락했다. 평온한 분위기의 높은 나무문이 조용히 열리며, 한 남자가 들어왔다. 익숙한 참모의 모습에 그녀는 눈을 한 번 깜박였다. 남자는 형식적으로 식사 중에 무례했다며 사과하고, 테이블 주변을 돌아 그녀에게 다가와 그의 귓가에서 보고했다. 그녀는 눈을 깜박이지 않고, 대신 상대적으로 천천히 얼굴을 돌려 턱을 들어 참모의 깔끔하게 정돈된 이마를 바라보았다. 
    "그렇군요, 그런 일로 인해"
    남자는 나이가 들지 않았지만, 깊은 주름을 지은 얼굴로 고개를 끄덕였다. 
    "결정을 내려주세요"
    
    "내게 키스를 허락해 주세요, 요한!"
    그리고, 예언자에게 미친 듯한 사랑을 보내는 소녀--가수가 연기하는--가 목청을 높여 호소했다. 스테이지는 세 번째 장면에 이르렀다.
    
    이탈리안 치코리에 수소의 우유로 만든 블루 디 부팔라 치즈를 뿌린 따뜻한 샐러드는 이미 식어버렸다. 적색으로 튀어오른 고기처럼 보이는 채소의 흩날리는
    
     몸에는 흰 줄무늬가 그어져 있었다. 포크로 입에 넣고 씹으면, 흰 접시에 뿌려져 있던 빈코트의 익은 포도 향이 입 안으로 스미어 들어갔다.
    
    포크를 내려놓고, 테이블 위의 황금색 종을 울렸다.
    
    "다음 요리를 가져와도 좋습니다"
    
    주방장은 잠시 어리둥절한 표정을 지었지만, 그녀의 얼굴을 본 후에는 빠르게 고개를 숙이고, 접시와 함께 방을 떠났다.
    
    "조지"
    
    그녀가 말을 시작했다. 그것은 같은 테이블에 앉아 있는 왼쪽의 남자에게 향했던 것이었다.
    
    남자의 부드러운 눈썹이 조금 움직였다. 그의 깊은 갈색 눈동자가 그녀를 바라보았다. 그 눈동자는 늙은 참나무처럼의 안정감과 지성을 지니고 있었으며, 이로 인해 뛰어난 사람들이 그와 대화하고 싶어하는 일이 끊이지 않았다. 그가 민감한 위치에 있음에도 불구하고, 그런 상황이 발생하지 않는 것은 그의 재능과, 그를 발견한 채용 위원회의 능력 덕분이라고 그녀는 차분하게 분석했다.
    
    "조지"
    
    그리고, 그녀는 다시 그의 이름을 부르며, 이번에는 그의 얼굴을 바라보았다. 조지는, 그녀를 가만히 바라보며 대답했다. 그의 두려움은 없었다--그것은 신뢰라는 감정에 포함되어 있었다.
    
    "수천만 명의 사람들이 죽어야 합니다"
    
    그 말이 다이닝 테이블에 떨어졌을 때--그녀는 처음으로 눈동자가 "어둡다"는 표현이 무엇인지를 알게 된 것 같았다. 달빛이 갑자기 구름에 가려져 한 톤 색이 까매진 것처럼 보였다. 침묵은 밤의 면에 삼켜져 버렸다. 침대에서 떨어진 작은 죽음.
    하지만 그것은 아마도 일시적인 것이었을 것이다.
    
    남자의
    
     넓은 손이 흰색 테이블보 위에 조심스럽게 올려졌다. 그녀는 한 숨을 쉬고, 왼손을 내밀어 그의 손을 잡았다. 따뜻한 손바닥. 오늘 밤, 많은 생명이 사라질 것이다.
    
     그 말이 식탁에 떨어졌을 때 - 그녀는 처음으로 눈동자가 "어두워진다"는 표현이 무엇인지를 알게 된 것 같았다. 달빛이 갑자기 구름에 가려져 한 톤 색이 까매진 것처럼 보였다. 침묵은 밤의 그림자에 삼켜져 버렸다. 베드에서 떨어져 나온 작은 죽음. 
     그러나 그것은 아마도 순간적인 일이었을 것이다.
     
     남자의 넓은 손이 흰색 테이블보 위에 조심스럽게 올려졌다. 그녀는 한 숨을 쉬고, 왼손을 내밀어 그의 손을 잡았다. 따뜻한 손바닥. 오늘 밤, 많은 생명이 사라질 것이다.
     
     남자가 설명하려는 듯하거나, 혹은 확인하려는 듯한 온화한 눈동자로 그녀를 포착한다. 그 깊은 눈동자에는 자문하게 만드는 힘이 있었다. 아니면 그것은 그녀의 소망일지도 모른다. 누구나 되돌리고 싶어하는 기회를 엿보고 있다. 변화는 무서워. 현재 상태에 몸을 맡기고 싶어...
     
     그렇지만 계속 나아가야 했다. 그것이 자신에게 주어진 역할이라고 그녀는 생각했다. 그녀는 자신이 공허함이라고 생각했다. 만약 허무하다면, 적어도 사랑도 고통도 흡수할 만큼의 공허함이면 좋겠다고 그녀는 생각했다.
     
     남자가 그녀의 태도에 변함이 없음을 알아차린 듯, 손을 놓았다. 남자가 떠난 공기가 얼마나 차갑던지.
     
     그녀는 사과하지 않았다. 그것은 단지 표면을 만들기 위한 것에 지나지 않았다는 것을 알고 있었다. 
     현대적--즉, 본능적 욕구를 얼마나 부인할 수 있는가, 결국 본능적 결정을 내리기 위한 우회적 방법을 얼마나 사용할 수 있는가,라는 측면이 있다. 그렇다면 그녀는 적어도 솔직하고 싶었다.
     
     남자는 끄덕이며
     
     , 의자를 뒤로 미루고, 일어났다. 그의 넓은 등이 왼쪽 손으로 체르니선반 옆의 문 손잡이를 열고, 그 너머로 사라져가는 모습을 보내주며, 그녀는 잊고 있던 숨을 내뱉었다.
     
     갑자기, 삐걱이는 소리가 시끄러워 보였다면, 바이올린의 현이 다음 곡조로 넘어가기 전에 단음을 연주하고 있었다. 홀로 남은 방에서 열정이 터져나오는 소녀의 목소리가 울려 퍼지고 있다. 이렇게 시끄러울 리가 없다는 생각이 들었다.
     
     "가서, 병사에게 황제님이 나에게 주신 명령을 들으라고 전해라"
     
     소리를 멈추라고 말하려고 한 숨이 다시 노크 소리에 의해 중단되었다. 그곳에 있던 사람은 그녀가 예상한 참모도 수행원도 아니라, 흰색 복장의 셰프였다.
     
     그도 자신이 장소에 어긋난다는 것을 알고 있었는지, 메인 요리를 손에 들고 있지만 언제든지 퇴장하라는 말을 하길 바라며 상황을 살펴보고 있었다.
     그녀는 그것을 알면서도, 무심하게 인사를 했고, 남자가 소리 없이 금테에 에메랄드 덩굿나무 무늬를 원형으로 둘러싼 접시를 테이블에 놓는 것을 기다렸다. 그 다음 순간을 기다리며, 퇴장하는 남자를 보며, 그녀는 불편함을 느꼈지만, 그것이 무엇인지를 알게 된 것은 피처럼 붉게 물든 오리고기에 칼을 꽂았을 때였다.
     
     남자는 접시를 한 사람분만 준비했던 것이다.
     그녀가 좋아하는 대로 풍성하게 뿌린 마멀레이드 소스가 무질서하게 접시를 가득 채우고 있다. 섬유가 이완되어 천천히 기름과 체액이 섞여 퍼져나간다.
     만나는 것. 만나지 않는 것.
     
     무대는 막을 내리려고 한다. 미친
     
      듯한 새처럼 소녀가 치성을 내지른다.
     
     
     눈을 뜨십시오, 요한.
     눈꺼풀을 뜨고 나를 보지 않는 것은, 내가 무서운 건가요.
     ...
     당신의 붉은 혀는 더 이상 움직이지 않는다. 아무 말도 하지 않는다. 요한, 그렇게 나에게 독을 뱉던 붉은 뱀이 움직이지 않게 됐어요. 아, 이상해요!
     
     
     당신의 머리는 내 것입니다.
     내 것은, 나의 맘대로 할 거야.
     개에게 주어 던져도, 포식자에게 쪼아먹히게 할 수도 있어요.
     
     
     아, 요한. 요한이여.
     
     
     "이제와서, 당신만이 아름답습니다"
     
     여자는 문을 지나, 레드 카펫 위를 동쪽으로 곧장 걸어갔다. 수행원과 다음 행동에 대한 이야기를 나누면서, 참모가 전화로 다른 나라의 비상 회의 결정을 내리는 것을 들었다. 흰 문에 도착해 열려는 순간, 멀리에 있는 방에서 쓰러진 남자의 차가운 육체를 상상했다. 어떻게든, 그것은 지금 그녀가 알 수 있는 것이 아니었지만, 남자의 몸에서 천천히 흐르며 바닥을 적시는 체액을 생각했다. 그것은 여자의 허구였고, 실제 처형장은 상당히 청결하게 유지되고 있을 것이라는 것은 상상하기 어렵지 않았다.
     
     "이쪽으로 오십시오,",
     
     인공적인 빛이 눈앞을 밝힌다. 검은 옷을 입은 부하들이 길을 열어준다. 여자는 당당하게 얼굴을 들고, 크게 한 발짝을 내딛었다.
     
     "미스 프레지던트"
     
     
     
     요한의 머리：
     혹은, 명제-대통령은 핵 버튼을 누를 것인가에 대해
     
     ----------------------------------------------------------------
     "제가 제안한 것은 꽤 간단했습니다: 그 필요한 코드 번호를 작은 캡슐에 넣고, 그 캡슐을 자원봉사자의 심장 바로 옆에 심어두는 것입니다. 그 자원봉사자는 무거운 대형 도살용 칼을 가지고 대통령을 동행하게 될 것입니다. 대통령이 핵무기를 발사하고 싶어한다면, 그가 할 수 있는 유일한 방법은, 그의 손으로 먼저 한 사람을 죽이는 것입니다...

     그는 누군가를 보고 죽음이 무엇인지, 무고한 죽음이 무엇인지를 깨닫게 될 것입니다. 백악관의 카펫에 피가 흐릅니다. 그것은 현실을 집으로 가져온 것입니다.
     
     이를 펜타곤의 친구들에게 제안했을 때, 그들은 말했습니다, "오, 신이여, 그게 너무 끔찍하군요. 누군가를 죽여야 한다니, 그것은 대통령의 판단력을 왜곡하게 만들 것입니다. 그는 버튼을 누르지 않을지도 모르겠습니다."
     
     — Roger Fisher, Bulletin of the Atomic Scientists, 1981년 3월 `,
    Russian: `

    Голова Иоанна
    
    Это случилось на вечернем приеме пищи.
    
    «—— Не радуйтесь, если кнут, который преследует вас, сломается. Из змеиных семян появится василиск, и его потомство будет разорять птиц »
    
    В тот момент, когда пророк пел своим тенором, прозвучал глухой стук в правую переднюю дверь. Музыка вообще не была такой громкой. Достаточно тихой, чтобы можно было вести беседу за обеденным столом. Вообще-то, проигрывание оперы во время еды - это немного странное хобби, вызванное лишь моим капризом из-за нехватки времени.
    
    Подумав об этом, она разрешила войти. Мужчина в костюме тихо открыл высокую деревянную дверь с мягким бежевым оттенком и вошел в комнату. Вид штаб-офицера, к которому она уже привыкла, заставил ее моргнуть.
    
    Мужчина извинился за свою грубость во время еды, подошел к ней, обошел стол и прошептал свой доклад на ушко. Она не моргнула, но вместо этого медленно повернула голову и подняла подбородок, взглянув на его аккуратный лоб.
    
    «Да, это так», - ответил мужчина с трудночитаемым выражением на лице, изрытым глубокими морщинами, хотя он и не стар. «Ваше решение».
    
    «Позвольте мне поцеловать вас, Иоанн!» - громко восклицала певица, играющая девушку, безумно влюбленную в пророка. Сцена перешла на третий акт.
    
    Теплый салат с итальянской цикорией, посыпанный сыром блу ди буфала, сделанным из молока водных буйволов, уже остыл. Этот овощ, похожий на красное мясо, имеет слегка волнистое тело с белыми прожилками. Когда она принесла его во рот вилкой и начала жевать, аромат винного сока, которым был посыпан белый тарелка,
    
     медленно распространился по ее рту.
    
    Она положила вилку и позвонила золотым колокольчиком на столе. «Вы можете принести следующее блюдо». Шеф-повар на мгновение выглядел озадаченным, но посмотрев на лицо женщины, быстро опустил голову, вышел из комнаты вместе с тарелкой.
    
    «Джордж»
    
    Женщина открыла рот. Это было обращено к мужчине, сидевшему слева от нее за тем же столом.
    
    Брови добродушного мужчины слегка дернулись. Его глубокие коричневые глаза смотрели на женщину. Они проявляли умиротворение и интеллект, напоминая старый дуб, и привлекали многих элит, которые хотели говорить с ним.
    Несмотря на то, что он мог быть воспринят как человек, трогать которого как болезненный участок, этого не произошло, благодаря его таланту и умению выбрать человека, который увидел его, в комиссии по приему на работу.
    
    «Джордж»
    
    Она снова позвала его по имени, на этот раз посмотрев ему в лицо. Джордж смотрел на нее с таким же взглядом. В нем не было страха - это были чувства, окаймленные доверием.
    
    «Миллионы людей должны умереть».
    
    Когда эти слова были произнесены за обеденным столом, она впервые поняла, что такое «темнеют глаза». Показалось, что свет луны внезапно исчез за облаками, и цвет стал тусклее. Молчание поглотило ночную занавеску, как маленькая смерть, разлучившая их с кровати.
    Но, видимо, это было только на мгновение.
    
    Его широкая рука мягко легла на белую скатерть. Она вздохнула и протянула левую руку, сжав его руку. Теплая ладонь. Сегодня ночью много жизней будет угаснуть.

    Когда эти слова упали на обеденный стол, она впервые поняла, что значит "затемнение глаз". Казалось, что свет луны внезапно скрылся за облаками, и цвета потеряли тон. Молчание казалось поглощенным ночной занавеской, как маленькая смерть, отделившая их от кровати. Но, видимо, это было только мгновение.

    Широкая рука мужчины мягко опустилась на белую скатерть. Она вздохнула и протянула левую руку, сжимая его руку. Тепло ладони. В этот вечер исчезнут многие жизни.
    
    Мужчина смотрел на женщину своими спокойными глазами, словно увещевая или подтверждая что-то. В его задумчивых глазах, словно просивших поставить себе вопрос, была некая инициативность. Или это было ее желание. Каждый ищет возможность отступить. Изменения страшны. Они хотят оставаться в статус-кво...
    
    Но она должна была идти дальше. Это была роль, которую она должна была играть, подумала она. Она думала, что она пуста. Если она была пустотой, она хотела быть такой пустотой, которая могла бы поглотить и любовь, и страдание.
    
    Возможно, мужчина прочитал в ее поведении нечто неизменное и отпустил руку. Какова была холодность воздуха, когда он ушел.
    
    Она не извинялась. Она знала, что это только придавало бы ей лицемерное лицо.
    В современном мире есть такой аспект: насколько мы можем отрицать, скажем, первобытные желания, и насколько мы можем пойти в обход, чтобы в конечном итоге принять первобытное решение. Если так, она хотела быть по крайней мере честной.
    
    Мужчина кивнул, отодвинул стул и встал. Его широкая спина открыла дверь рядом с левой полкой и исчезла за ней. Она выдохнула забытый вдох, наблюдая за тем, как он уходит.
    
    Вдруг казал
    
    ось, что скрипучий звук раздражает, это были короткие звуки скрипки, которые играли перед переходом к следующей мелодии. Голос девушки, излучающей страсть, эхом звучал в комнате, где она осталась одна. Она подумала, что это не должно было быть таким громким.
    
    "Идите, скажите солдатам, чтобы они послушали приказ, который король дал мне"
    
    Она хотела сказать, что останавливает музыку, но вздох был прерван звуком стука в дверь. Там был не ожидаемый ею штабной офицер или помощник, а шеф-повар в белом.
    
    Он, похоже, знал, что он не на своем месте, и казалось, что он ждал, когда ей будет предложено уйти, держа основное блюдо в руках. Она знала это, но вежливо поблагодарила его и подождала, пока он тихо поставит на стол тарелку, обрамленную золотой рамой с узором из бериллового плюща. После мгновения ожидания, она посмотрела на мужчину, который ушел, и почувствовала некое несоответствие, но она поняла, что это было только тогда, когда она воткнула нож в утку, кроваво-красного цвета.
    
    Мужчина приготовил всего одну порцию. На ее любимом соусе из мармелада, которого было намного больше, чем обычно, сползала по тарелке. Волокна расслаблялись, и медленно смешивались масло и телесные жидкости.
    Смешивающиеся вещи. Несмешивающиеся вещи.
    
    Сцена двигалась к финалу. Девушка подняла свой голос, как сумасшедшая птица.
    
    
    Открой глаза, Иоанн.
    Не смотришь ли на меня, потому что ты боишься меня.
    ……
    Твой красный язык больше не двигается. Ты не говоришь ничего. Иоанн, ядовитая змея, которая так сильно отравила меня, теперь не двигается. О, как странно!
    
    
    Твоя голова принадлежит
    
     мне.
    То, что принадлежит мне, я делаю, что хочу.
    Я могу подкинуть его собакам или позволить хищникам его клюнуть.
    
    
    Ах, Иоанн. Иоанн.
    
    
    "Сейчас ты один красивый для меня"
    
    Она прошла через дверь и пошла прямо по красной ковровой дорожке на восток. Обмениваясь мнениями с помощниками о том, что будет дальше, она слышала, как штабной офицер дает решение о срочном совещании с другими странами по телефону. Приближаясь к белой двери и открывая ее, она вспомнила о холодном теле мужчины, лежащем в другой комнате. Она не знала, как это было, но представила, как телесные жидкости медленно текут из тела мужчины и пропитывают пол. Это было ее воображение, и она не сомневалась, что на самом деле место казни было очень чистым.
    
    "Пожалуйста, сюда,"
    
    Искусственный свет освещал ей путь. Сотрудники в черном открывали ей дорогу. Она подняла голову и сделала большой шаг вперед.
    
    "Мисс Президент"
    
    
    
    Голова Иоанна:
    Или Президент Нажимает Кнопку Ядерного Оружия

    ----------------------------------------------------------------
    "Мое предложение было довольно простым: поместить необходимый код в небольшую капсулу и затем имплантировать эту капсулу прямо возле сердца добровольца. Доброволец должен был всегда носить с собой большой тяжелый мясницкий нож и сопровождать президента. Если президент когда-либо захочет запустить ядерное оружие, единственным способом сделать это будет сначала собственными руками убить одного человека...
    Ему придется посмотреть на кого-то и осознать, что такое смерть - что такое невинная смерть. Кровь на ковре Белого дома. Это реальность, которую надо осознать.
    Когда я предложил это своим друзьям в Пентагоне, они сказали: "Мой Бог, это ужасно. Необходимость убить кого-то исказила бы суждение президента. Он может никогда не нажать на кнопку."
    — Роджер Фишер, Бюллетень атомных ученых, март 1981
    `,
  };

  useEffect(() => {
    setText(texts[language]);
  }, [language]);

  return (
    <>
      <div className="flex justify-center space-x-4 m-10">
        <button
          onClick={() => setLanguage("English")}
          className="btn btn-outline btn-accent"
        >
          English
        </button>
        <button
          onClick={() => setLanguage("Spanish")}
          className="btn btn-outline btn-accent"
        >
          Spanish
        </button>
        <button
          onClick={() => setLanguage("Chinese")}
          className="btn btn-outline btn-accent"
        >
          Chinese
        </button>
        <button
          onClick={() => setLanguage("Korean")}
          className="btn btn-outline btn-accent"
        >
          Korean
        </button>
        <button
          onClick={() => setLanguage("Russian")}
          className="btn btn-outline btn-accent"
        >
          Russian
        </button>
      </div>
      <div className="bg-gray-50 min-h-screen">
        <header className="p-5 text-center bg-blue-500 text-white">
          <h1 className="text-4xl mb-2"> The Head of John the Baptist</h1>
          <p> She sits there in a dining room while her favorite play "Salome" is playing. "Tens of millions of people must die," she said.</p>
        </header>

        <main className="p-5 space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <Image src="dining-table"/>
            <Image src="dish"/>
            <Image src="chef"/>
            <Image src="george"/>
            <Image src="leaving-room"/>
          </div>

          <article className="prose max-w-none whitespace-pre-line">
            {text}
          </article>
        </main>

        <footer className="p-5"></footer>
      </div>
    </>
  );
}

function Image() {
  return <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>;
}

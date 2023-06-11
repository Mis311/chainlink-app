import Link from "next/link";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [language, setLanguage] = useState("English");
  const [text, setText] = useState("");

  const texts = {
    English: `It happened during a dinner party.

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
    
    Or, alternatively, the proposition—Should the president press the nuclear button.`,
    Spanish: `Your Japanese text here...`,
    Chinese: `約翰南的首。

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
    
    或者，一个命题：总统是否会按下核按钮。`,
    Korean: `Your Korean text here...`,
    Russian: `Голова Иоанна.

    Это случилось во время ужина.
    
    "Не радуйся, потому что плеть, мучившая тебя, сломалась. Вероятно, от семени змеи вырастет Василиск, который будет пожирать птицу", - пророчество прозвучало ясным тенором. В это время раздался громкий стук в тяжелую дверь справа. Изначально звук музыки не был слишком громким. Он был достаточно тихим, чтобы разговор двух людей за обеденным столом был слышен. Вообще-то, играть оперу во время еды было немного странным, всего лишь проявлением ее собственной эгоистичности, в результате которой она оказалась в конечном счете в бегах от времени.
    
    Рассудив так, она позволила ему войти. Он тихо открыл высокую деревянную дверь с нежно-карамельными стенами и вошел внутрь в своем костюме.
    Увидев знакомую фигуру советника, она моргнула глазом.
    Мужчина извинился формально за прерывание еды, осмотрелся вокруг стола и подошел ближе к ней, чтобы доложить ей что-то ухом.
    Женщина не моргнула глазом, вместо этого медленно повернула голову, подняла подбородок и смотрела на аккуратно причесанный лоб советника.
    "Да, именно так", - сказала она.
    Мужчина был не пожилой, но у него были глубокие морщины на лице, которые было трудно прочитать на его выражении.
    "Примите свое решение".
    
    "Позвольте мне поцеловать вас, Иоанн!"
    
    Так сказала певица, исполняющая роль безумно влюбленной девушки, пристрастившейся к пророку. Сцена находилась в третьем акте.
    
    Теплая салатная заправка сделанная из буффало-молока с итальянской чикорей уже успела остыть. В картофельной салате, похожем на мясо красного цвета, белые жилки пронизывались. Прикусив вилкой и почувств
    
    овав насыщенный аромат спелого винограда Винкотт, который рассыпался на белую тарелку, она ощутила, как его аромат распространяется в ее роту.
    
    Она положила вилку, зазвонила золотистым звонком на столе.
    
    "Можно подать следующее блюдо".
    
    Шеф-повар на мгновение нахмурился, но, увидев лицо женщины, поспешил наклонить голову и ушел со своей тарелкой.
    
    "Джордж".
    
    Женщина открыла рот. Это было адресовано мужчине, сидящему слева от нее за столом.
    
    Измягчившиеся брови мужчины слегка дернулись. Его глубокие, карие глаза смотрели на женщину. Они были наполнены спокойствием и интеллектуальностью, которую приносит старый дуб, и всегда привлекали к себе внимание элитных людей, которые хотели поговорить с ним.
    Женщина анализировала хладнокровно: она была в положении, когда ее могли бы обращаться с неестественным вниманием, но такого не происходило, в основном благодаря его таланту и умению привлечь людей, которые могут это увидеть.
    
    "Джордж".
    
    И женщина вновь назвала его имя, на этот раз смотря ему в глаза.
    Джордж продолжал смотреть на нее. Он не испытывал страха - это было сопряжено с доверием.
    
    "Должны погибнуть миллионы людей".
    
    Когда эти слова были брошены на обеденный стол, женщина впервые почувствовала, что ее глаза "затуманились". Казалось, что луна быстро скрылась за облаками, и цвета стали более тусклыми. Молчание поглощено ночными тенями. Смерть маленькой кровати.
    Однако это было всего лишь мгновение.
    
    Широкая рука мужчины легла на белое скатерть на столе. Женщина вздохнула и протянула левую руку, чтобы взять его руку. Т
    
    еплая ладонь. Сегодня вечером много жизней придет к концу.
    
    Мужчина, будто успокаивая или проверяя, смотрел на женщину своими мягкими и рассудительными глазами. В его задумчивых глазах было внутреннее стремление к самоанализу. Или, может быть, это было желанием женщины. Все они ожидали возможности вернуться. Перемены страшны. Хочется оставаться в текущем состоянии...
    
    Но все же она должна продвигаться вперед. Она думала, что это ее предназначение - быть пустой. Если это пустота, пусть она будет достаточно пустой, чтобы поглотить и сострадание, и страдание.
    
    Мужчина, похоже, понял, что ее отношение не изменилось, или, может быть, он проверял это. Он отступил. Воздух, оставленный им, был настолько холодным.
    
    Женщина не извинилась. Она знала, что это просто фасад.
    В современных - так сказать, "примитивных" аспектах можно назвать то, насколько можно отрицать примитивное желание, и насколько можно сделать косвенный путь для окончательного принятия примитивного решения. Тогда женщина хотела быть, по крайней мере, искренней.
    
    Мужчина, кивнув, отодвинул стул и встал. Его широкая спина открыла дверную ручку рядом со стеллажем справа от левой руки, и, увидев, как он исчезает за ней, женщина выдохнула, забыв о своем дыхании.
    
    Вдруг, когда скрипучий звук был слишком громким, струны скрипки издали короткий звук перед переходом к следующей мелодии. Голос девушки, испытывающий ярость, раздавался в пустой комнате. Она казалась громче, чем ожидалось.
    
    "Иди и скажи солдатам, чтобы они послушали приказ, разрешенный вашим величеством."
    
    Она хотела сказать "остановите музыку", но ее вздох прервал звук стука. Там стоял не ожидаемый советник или
    
     близкий соратник, а шеф-повар в белой форме.
    
    Казалось, что он знает, что он не на своем месте, и с нетерпением ожидает указаний, держа в руках главное блюдо. Женщина, зная это, спокойно поблагодарила и подождала, пока мужчина тихо положит на стол блюдо с золотой рамкой, окруженное изумрудной плющевой узором. После мгновения ожидания, она посмотрела на уходящего мужчину и почувствовала некоторое недовольство, но поняла, что происходит, когда вонзила нож в красное мясо кровоточащей утки.
    
    Мужчина приготовил только одну порцию. Мармеладный соус, нанесенный на ее просьбу в избытке, размазывался беспорядочно по тарелке. Волокна становились расслабленными, и масло смешивалось медленно.
    
    Взаимодействующие элементы. Невзаимодействующие элементы.
    
    Сцена направляется к завершению. Девочка поднимает голос, выражая свою безумную страсть.
    
    Открой глаза, Иоанн.
    Ты не смотришь на меня, потому что боишься меня.
    ...
    Твой язык больше не двигается. Ничего не говорит. Иоанн, умер такой ярко-алый змей, который так много яда вылил на меня. Как странно!
    
    Твоя голова - моя.
    То, что мое, я делаю с ним, как хочу.
    Даже если отдать собаке, можно дать птице.
    `,
  };

  useEffect(() => {
    setText(texts[language]);
  }, [language]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="p-5 text-center bg-blue-500 text-white">
        <h1 className="text-4xl mb-2">The Head of Johanan</h1>
        <p>She sat on a table with a decision.</p>
      </header>

      <main className="p-5 space-y-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Replace "Image" with the actual <img> tags or components representing your images */}
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </div>

        <article className="prose max-w-none whitespace-pre-line">
          {text}
        </article>
      </main>

      <footer className="p-5">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setLanguage("English")}
            className="btn btn-outline btn-accent"
          >
            English
          </button>
          <button
            onClick={() => setLanguage("Japanese")}
            className="btn btn-outline btn-accent"
          >
            Japanese
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
            onClick={() => setLanguage("Spanish")}
            className="btn btn-outline btn-accent"
          >
            Spanish
          </button>
        </div>
      </footer>
    </div>
  );
}

function Image() {
  return <div className="aspect-w-16 aspect-h-9 bg-gray-200"></div>;
}

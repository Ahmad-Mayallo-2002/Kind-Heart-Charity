import slide_image_1 from "../images/slide/slide-1.jpg";
import slide_image_2 from "../images/slide/slide-2.jpg";
import slide_image_3 from "../images/slide/slide-3.jpg";
import icon_1 from "../images/icons/hands.png";
import icon_2 from "../images/icons/heart.png";
import icon_3 from "../images/icons/receive.png";
import icon_4 from "../images/icons/scholarship.png";
import cause_1 from "../images/causes/cause-1.jpg";
import cause_2 from "../images/causes/cause-2.jpg";
import cause_3 from "../images/causes/cause-3.jpg";
import customer_1 from "../images/avatar/avatar-1.jpg";
import customer_3 from "../images/avatar/avatar-3.jpg";
import customer_4 from "../images/avatar/avatar-4.jpg";
import customer_5 from "../images/avatar/avatar-5.jpg";

export const data = {
    sliderData: [
        {
            title: "Humanity",
            imageUrl : slide_image_1,
            description : "Please tell your friends about our website Previous"
        },
        {
            title: "be a Kind Heart",
            imageUrl : slide_image_2,
            description : "Professional charity theme based on Bootstrap 5.2.2 Previous"
        },
        {
            title: "Non-profit",
            imageUrl : slide_image_3,
            description : "You can support us to grow more Previous"
        }
    ],
    featuresData: [
        {
            icon : icon_1,
            title : "Become a volunteer"
        },
        {
            icon : icon_2,
            title : "Caring Earth"
        },
        {
            icon: icon_3,
            title: "Make a Donation"
        },
        {
            icon: icon_4,
            title: "Scholarship Program"
        }
    ],
    causesData: [
        {
            image: cause_1,
            title: "Children Education",
            description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito",
            progress: 80,
            raised: "$18.500",
            goal: "$32.000"
        },
        {
            image: cause_2,
            title: "Poverty Development",
            description: "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor",
            progress: 50,
            raised: "$27.600",
            goal: "$60.000"
        },
        {
            image: cause_3,
            title: "Supply drinking water",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
            progress: 100,
            raised: "$94.600",
            goal: "$100.000"
        }
    ],
    customersData: [
        {
            description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme",
            title: "Maria, Boss",
            avatar: customer_1,
        },
        {
            description: "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci",
            title: "Thomas, Partner",
            avatar: customer_3
        },
        {
            description: "Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme",
            title: "Jane, Advisor",
            avatar: customer_4
        },
        {
            description: "Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci",
            title: "Bob, Entreprenuer",
            avatar: customer_5
        }
    ]
}
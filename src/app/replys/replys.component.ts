import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-replys',
  templateUrl: './replys.component.html',
  styleUrls: ['./replys.component.scss']
})
export class ReplysComponent implements OnInit {
  url: number;
  appUrl : string;
  user : object;
  replys : object;
  avatar : string;

  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute,private route:Router) {
    this.appUrl = "https://www.activityapp.online/";
    this.user = JSON.parse(localStorage.getItem('user'));

    let photo = [
      "https://cf.ltkcdn.net/socialnetworking/images/orig/168646-425x425-Cat-Avatar-Primary.jpg",
      "https://images.vexels.com/media/users/3/155407/isolated/preview/84d636131360b843e427a4ff7061ae0a-striped-cat-avatar-by-vexels.png",
      "https://previews.123rf.com/images/lar01joka/lar01joka1806/lar01joka180600074/102460252-isolated-cute-cat-avatar.jpg",
      "https://cdn4.iconfinder.com/data/icons/animal-2-1/100/animal-15-512.png",
      "https://previews.123rf.com/images/cundrawan703/cundrawan7031207/cundrawan703120700008/14519717-dog-avatar-cartoon-character-icon.jpg",
      "http://buysellgraphic.com/images/graphic_preview/large/dog_animal_avatar_funny_cartoon_sketch_41166.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpbblqcli81b4kqdMxvAfp-blI3QqfJOscl71qDbUR_diQaRQ&s",
      "https://i.pinimg.com/originals/78/54/84/7854843699c1893928012a442386a129.jpg"
    ];

    this.avatar = "https://www.xeus.com/wp-content/uploads/2014/09/One_User_Orange.png";

  }

  async getReplys (){
    let user ={};
    user["id"] = this.user;

    this.http.post<any>(this.appUrl + 'api/app/get_respondents',user ).subscribe(data => {
      this.replys = data;

    })
  }


  goReplysDetail (id){
    this.route.navigateByUrl("/replysdetail/" + id);
  }

  ngOnInit(): void {
    this.getReplys();
  }

}

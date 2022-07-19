import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  // Table Data
  displayedColumns: string[] = ["name"];
  dataSource: any = null;
  // End of Table Data

  name: any = [];
  playerStart: string = "";
  resulth: string = "";
  dataTruth: any = [
    "Siapa teman yang paling kamu benci di antara kita?",
    "Siapa orang terakhir yang kamu hubungi di WhatsApp?",
    "Jika aku ada di samping kamu sekarang, apa yang bakal kamu lakukan?",
    "Apa yang bikin kamu cemburu?",
    "Apa yang bikin kamu bahagia banget?",
    "Apa yang membuatmu sangat ketakutan?",
    "Apa yang paling kamu benci dari dirimu?",
    "Apa hal yang paling memalukan dan pernah kamu lakukan?",
    "Apa yang kamu lakukan saat bertemu dengan orang yang membencimu ?",
    "Apa kesalahan terburuk yang pernah pernah kamu lakukan?",
    "Pernah selingkuh? Apa pendapatmu soal selingkuh?",
    "Siapa orang yang kamu sukai diam-diam?",
    "Siapa orang yang terakhir kamu stalk di sosmed?",
    "Kenapa kamu putus dengan mantan sebelumnya?",
    "Seseorang seperti apa yang kamu inginkan?",
  ];
  dataDare: any = [
    "Peragakan salah satu orang di antara kita sampai ada yang bisa menebak siapa orang yang diperagakan.",
    "Katakan 'gug' di setiap akhir kalimat sampai giliranmu yang selanjutnya.",
    "Tirukan hewan darat sampai ada yang bisa menebak.",
    "Bertingkahlah seperti ayam sampai giliranmu yang selanjutnya.",
    "Biarkan satu orang menggambar di wajahmu.",
    "Tantang bilang i love you (nama pacar) kamu di ig story sekarang.",
    "Tantang bilang i miss you (nama mantan) kamu di ig story sekarang.",
    "Joged jamet di story WhatsApp.",
    "Kirim foto selfie ke mantan.",
    "Kirim pap nangis ke pacar.",
    "Berikan ponselmu kepada salah satu di antara kita dan biarkan orang tersebut mengirim satu pesan kepada siapapun yang dia mau.",
    "Tutup mata, lalu raba muka salah satu di antara kita, sampai kamu bisa menebak siapa orang itu.",
    "Ungkapkan perasaan kamu buat gebetanmu.",
    "Push up 20 kali.",
    "Kayang selama satu menit.",
    "Plank selama satu menit.",
  ];
  playerForm!: FormGroup;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      playerName: ["", Validators.required],
    });

    this.getAllData();
  }

  public processDare() {
    var varCounter = 0;
    let loop = setInterval(() => {
      if (varCounter <= 10) {
        varCounter++;
        let random = Math.floor(Math.random() * this.dataDare.length);
        this.resulth = this.dataDare[random];
      } else {
        clearInterval(loop);
      }
    }, 100);
  }

  public processTruth() {
    var varCounter = 0;
    let loop = setInterval(() => {
      if (varCounter <= 10) {
        varCounter++;
        let random = Math.floor(Math.random() * this.dataTruth.length);
        this.resulth = this.dataTruth[random];
      } else {
        clearInterval(loop);
      }
    }, 100);
  }

  public processPlayer() {
    var varCounter = 0;
    let loop = setInterval(() => {
      if (varCounter <= 10) {
        varCounter++;
        let random = Math.floor(Math.random() * this.name.length);
        this.playerStart = this.name[random];
      } else {
        clearInterval(loop);
        let random = Math.floor(Math.random() * this.name.length);
        this.playerStart = this.name[random];
        this.name.splice(random, 1);
        this.getAllData();
      }
    }, 100);
  }

  public getAllData() {
    this.dataSource = new MatTableDataSource(this.name);
  }

  public addPlayer() {
    if (this.playerForm.valid) {
      let result = this.playerForm.value;
      this.name.push(result["playerName"]);
      this.getAllData();
    }
  }
}

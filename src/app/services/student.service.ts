import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Istudent } from "../models/student";

@Injectable({
    providedIn:"root"
})
export class studentService {
constructor(private _http:HttpClient){}


    BASE_URL1=environment.BASE_URL
    STUDENT_URL=`${this.BASE_URL1}/student.json`


private craetesub:Subject<Istudent>=new Subject<Istudent>()
createob$:Observable<Istudent>=this.craetesub.asObservable()

private removesub:Subject<string>=new Subject<string>()
removeob$:Observable<string>=this.removesub.asObservable()
private editsub:Subject<Istudent>=new Subject<Istudent>()
editob$ :Observable<Istudent>=this.editsub.asObservable()
private updatesub:Subject<Istudent>=new Subject<Istudent>()
updateob$:Observable<Istudent>=this.updatesub.asObservable()

create(obj:Istudent){
    this.craetesub.next(obj)
}
remove(id:string){
    this.removesub.next(id)
}
edit(obj:Istudent){
    this.editsub.next(obj)
}
update(obj:Istudent){
    this.updatesub.next(obj)
}

    fetchalldata():Observable<Istudent[]>{
        return this._http.get<any>(this.STUDENT_URL).pipe(
            map(obj=>{
                let stdArr=[]
                for (const key in obj) {
               
                    stdArr.push({...obj[key],id:[key]})
                    
                }
                return stdArr
            })
        )
    }


    createstd(obj:Istudent):Observable<Istudent>{
        return this._http.post<Istudent>(this.STUDENT_URL,obj)
    }


    onremove(id:string):Observable<string>{
        let remove_url=`${this.BASE_URL1}/student/${id}.json`
       return  this._http.delete<string>(remove_url)
    }

    onupdate(obj:Istudent):Observable<Istudent>{
        let update_url=`${this.BASE_URL1}/student/${obj.id}.json`
        return this._http.patch<Istudent>(update_url,obj)
    }

}
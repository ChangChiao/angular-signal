import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Singal Basic</h1>
      <h2>
        Count: {{ count() }} <button (click)="set()">set</button
        ><button (click)="update()">update</button>
      </h2>
      <h2>
        Object: {{ obj() | json }}
        <button (click)="mutate()">mutate</button>
      </h2>
      <h2>
        Object2: {{ obj2() | json }}
        <button (click)="updateObject()">update object</button>
      </h2>
    </div>
  `,
  styleUrls: ['./singal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingalComponent {
  count = signal(0);
  obj = signal({ val: 1 });
  obj2 = signal(
    { val: 1 },
    {
      equal: (a, b) => a.val === b.val,
    }
  );

  set() {
    this.count.set(100);
  }

  update() {
    this.count.update((v) => v + 1);
  }

  // for update array or object
  mutate() {
    this.obj.mutate((v) => (v.val += 1));
  }

  updateObject() {
    this.obj2.set({ val: 0 });
  }
}

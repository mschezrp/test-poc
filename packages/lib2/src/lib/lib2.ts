import { lib1 } from 'test-lib1';

export function lib2(): string {
  return 'lib2-' + lib1();
}

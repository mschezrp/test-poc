import { lib1 } from 'test-lib1';
import { lib3 } from 'test-lib3';
import { lib4 } from 'test-lib4';

export function lib2(): string {
  return 'lib2-' + lib1() + '-' + lib3() + '-' + lib4();
}
